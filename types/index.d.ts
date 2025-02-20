type Sort = 'default' | 'A-Z' | 'new';

type SortOptions = { key: Sort, value: string }[];

type Quality = '64' | '96';

interface Station {
  id: number
  prefix: string
  title: string
  tooltip: string
  svg_icon: string
  new: boolean | number
  AAC64: string
  AAC96: string
  M3U: string
  url: string
}
