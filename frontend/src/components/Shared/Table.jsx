const Table = ({ data, columns }) => (
    <table>
      <thead>
        <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => <td key={col}>{item[col]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default Table;
  