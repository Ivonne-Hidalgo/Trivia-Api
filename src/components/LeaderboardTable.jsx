import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const LeaderboardTable = ({ leaders }) => (
  <DataTable value={leaders} responsiveLayout="scroll">
    <Column field="nickname" header="Nickname" />
    <Column field="points" header="Points" />
    <Column field="difficulty" header="Difficulty" />
    <Column field="Winner Places" header="Winner Places" />

  </DataTable>
);

export default LeaderboardTable;
