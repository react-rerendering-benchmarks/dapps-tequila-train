import { useRef } from "react";
import { useEffect, useState } from 'react';
import { getProgramMetadata, getStateMetadata, ProgramMetadata, StateMetadata } from '@gear-js/api';
import { Buffer } from 'buffer';
import { useAlert, useReadFullState } from '@gear-js/react-hooks';
import { HexString } from '@polkadot/util/types';
export function useProgramMetadata(source: string) {
  const alert = useAlert();
  const metadata = useRef<ProgramMetadata>();
  useEffect(() => {
    fetch(source).then(response => response.text()).then(raw => (`0x${raw}` as HexString)).then(metaHex => getProgramMetadata(metaHex)).then(result => metadata.current = result).catch(({
      message
    }: Error) => alert.error(message));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return metadata.current;
}
export function useStateMetadata(source: string) {
  const alert = useAlert();
  const data = useRef<{
    buffer: Buffer;
    meta: StateMetadata;
  }>();
  useEffect(() => {
    fetch(source).then(response => response.arrayBuffer()).then(arrayBuffer => Buffer.from(arrayBuffer)).then(async buffer => ({
      buffer,
      meta: await getStateMetadata(buffer)
    })).then(result => data.current = result).catch(({
      message
    }: Error) => alert.error(message));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data.current;
}
export function useReadState<T>({
  programId,
  meta
}: {
  programId?: HexString;
  meta: string;
}) {
  const metadata = useProgramMetadata(meta);
  return useReadFullState<T>(programId, metadata);
}