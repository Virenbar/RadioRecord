export function getStream(S: Streams, quality: Quality) {
  if (S.stream_64.includes(quality)) {
    return S.stream_64;
  }
  else if (S.stream_128.includes(quality)) {
    return S.stream_128;
  }
  else {
    return S.stream_320;
  }
}

interface Streams {
  stream_64: string
  stream_128: string
  stream_320: string
}
