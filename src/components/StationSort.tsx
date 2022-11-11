import { useEffect, useState } from "preact/hooks";

const options = [
    { key: "default", value: "По умолчанию" },
    { key: "A-Z", value: "По алфавиту" },
    { key: "new", value: "По новизне" }
];

export function StationSort(props: Props) {
    const [sort, setSort] = useState(getSort());
    useEffect(() => props.onChange(sort), [sort]);

    const list = options.map(O => {
        return (
            <li><button class={`dropdown-item ${sort == O.key ? "active" : ""}`} type="button" onClick={() => onSortChange(O.key)}>
                {O.value}
            </button></li>
        );
    });

    return (
        <div class="dropdown pb-1">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-filter-square"></i>{" "}
                Сортировка
            </button>
            <ul class="dropdown-menu">
                {list}
            </ul>
        </div>
    );

    function onSortChange(sort: string) {
        const params = getHash();
        params.set("sort", sort);
        location.hash = params.toString();
        setSort(sort);
    }
}

function getHash() { return new URLSearchParams(location.hash.replace("#", "?")); }

function getSort() { return getHash().get("sort"); }

interface Props {
    onChange: (sort: string | null) => void
}
