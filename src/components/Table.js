const Table = ({ data }) => {
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Years</th>
          <th>Medal</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item?.Id}</td>
            <td>{item?.Year}</td>
            <td>{item?.Medals}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Table;
