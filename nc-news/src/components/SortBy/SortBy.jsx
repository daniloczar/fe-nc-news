export const SortBy = ({ setSort, setOrder }) => {
  const handleClick = (sort) => {
    const [sortBy, order] = sort.split(" ");
    setSort(sortBy);
    setOrder(order);
  };

  return (
    <div>
      <label>
        <select
          className="sort_by"
          onChange={(event) => {
            handleClick(event.target.value);
          }}
        >
          <option value={"default"} disabled>
            Sort By...
          </option>
          <option value="created_at desc">Newest</option>
          <option value="created_at asc">Oldest</option>
          <option value="votes desc">Most liked</option>
          <option value="votes asc">Least liked</option>
          <option value="comment_count desc">Most talked about</option>
          <option value="comment_count asc">Least talked about</option>
          {/* //add comment sort */}
        </select>
      </label>
    </div>
  );
};
