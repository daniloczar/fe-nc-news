
export const SortBy = ({ setSortBy, setOrder }) => {
  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  return (
    <nav>
      <ul id="option-list">
        <li>
          <form>
            <label>
              Sort by:{" "}
              <select onChange={handleSortByChange}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
                <option value="title">Title</option>
              </select>
            </label>
          </form>
        </li>
        <li>
          <form>
            <label>
              Order:{" "}
              <select onChange={handleOrderChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
          </form>
        </li>
      </ul>
    </nav>
  );
};
