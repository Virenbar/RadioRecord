import { sortBy } from 'lodash-es';
import { list } from '../data/stations.json';

const ss: Station[] = [];

function getStream(S: typeof list[0], quality: Quality) {
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

list.forEach((S) => {
  const { id, prefix, title, tooltip } = S;
  ss.push({
    id,
    prefix,
    title,
    tooltip,
    new: S.new,
    url: S.shareUrl,
    svg_icon: S.svg_fill,
    AAC64: getStream(S, '64'),
    AAC96: getStream(S, '96'),
    M3U: S.stream_hls,
  });
});

export default function () {
  const sort = useSort();

  const stations = computed(() => {
    switch (sort.value) {
      case 'A-Z':
        return sortBy(ss, S => S.title.toLowerCase());
      case 'new':
        return sortBy(ss, S => S.prefix == 'record' ? 0 : -S.id);
      default:
        return ss;
    }
  });

  return {
    stations,
  };
}
