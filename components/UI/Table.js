import styled from "styled-components";
import theme from "@BPSI/utils/theme";

const StyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${theme.typography.small};
  thead > tr > th {
    font-size: ${theme.typography.small};
    padding: 8px 15px;
    text-align: center;
  }
  tbody > tr > td {
    font-size: ${theme.typography.small};
    border: 1px solid #0D2155;
    text-align: center;
    padding: 8px 15px;
  }
  tbody > tr > td:not(:last-child) {
    width: 30%;
    text-align: left;
  }
`;

const Table = ({ items, title }) => {
	return (
	<StyTable>
      <thead>
        <tr>
        <th />
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {items
          ? items.map(player => (
              <tr key={player.id}>
                <td>{player.proxy_name}</td>
                <td>{player.player_code}</td>
              </tr>
            ))
          : null}
      </tbody>
      </StyTable>
	)
};
export default Table;