import { sortBy } from 'lodash-es';
import { list } from '~/data/stations.json';
import { getStream } from '~/utils/stream';

const station_list: Station[] = [];

list.forEach((S) => {
  const { id, prefix, title, tooltip } = S;
  station_list.push({
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
        return sortBy(station_list, S => S.title.toLowerCase());
      case 'new':
        return sortBy(station_list, S => S.prefix == 'record' ? 0 : -S.id);
      default:
        return station_list;
    }
  });

  return { stations };
}
