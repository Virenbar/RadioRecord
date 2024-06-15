import { sortBy } from "lodash-es";
import { list } from "../data/stations.json";

export default function () {
  const sort = useSort();
  const stations = computed(() => {
    switch (sort.value) {
      case "A-Z":
        return sortBy(list, S => S.title.toLowerCase());
      case "new":
        return sortBy(list, S => S.prefix == "record" ? 0 : -S.id);
      default:
        return list;
    }
  });

  return {
    stations
  };
}
