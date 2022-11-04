
export function StationSort() {
    const sort = getSort();
    const options = [
        { key: "default", value: "По умолчанию" },
        { key: "A-Z", value: "По алфавиту" },
        { key: "new", value: "По новизне" }
    ];
    const list = options.map(O => {
        return (
            <li><button class={`dropdown-item ${sort == O.key ? "active" : ""}`} type="button" onClick={() => setSort(O.key)}>
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

    function setSort(sort: string) {
        const S = new URLSearchParams(location.search);
        S.set("sort", sort);
        location.search = S.toString();
    }
}

export function getSort() {
    const params = new URLSearchParams(location.search);
    return params.get("sort");
}
