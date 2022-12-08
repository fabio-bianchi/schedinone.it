import React from 'react';
import Table from '../Table';
import makeData from '../makeData';
import styled from 'styled-components'

const Styles = styled.div`
  padding: 1rem;
  
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      background-color:white;
      :last-child {
        border-right: 0;
      }
    }
  }
`

function Grid() {
    const columns = React.useMemo(
        () => [
          {
            Header: 'Nome Squadra',
            columns: [
              {
                Header: 'Nome',
                accessor: ((rows) => rows['Nome '].toLowerCase()),
              },
              {
                Header: 'Soprannome',
                accessor: 'Soprannome',
              },
            ],
          },
          {
            Header: 'Scommesse singole',
            columns: [
              { Header: 'Vincitore', accessor: 'Vincitore' },
              { Header: 'Secondo', accessor: 'Secondo' },
              { Header: 'Terzo', accessor: 'Terzo' },
              { Header: 'Quarto', accessor: 'Quarto' },
              { Header: 'Capocannoniere', accessor: 'Capocannoniere' },
              { Header: 'Miglior portiere', accessor: 'Miglior portiere' },
              { Header: 'Squadra con miglior attacco', accessor: 'Squadra con miglior attacco' },
              { Header: 'Squadra con peggior difesa', accessor: 'Squadra con peggior difesa' },
              { Header: "Girone con piu' gol", accessor: "Girone con piu' gol" },
              { Header: 'MVP', accessor: 'MVP' },
             
              
              
    
            ],
          },
          {
            Header: 'Gruppo A',
            columns: [
              { Header: 'PRIMO', accessor: "Group A PRIMO" },
              { Header: 'SECONDO', accessor: 'Group A SECONDO' },
              { Header: 'TERZO', accessor: 'Group A TERZO' },
              { Header: 'QUARTO', accessor: 'Group A QUARTO' },
              
           
            ]
          },
          {
            Header: 'Gruppo B',
            columns: [
              { Header: 'PRIMO', accessor: 'Group B PRIMO' },
              { Header: 'SECONDO', accessor: 'Group B SECONDO' },
              { Header: 'TERZO', accessor: 'Group B TERZO' },
              { Header: 'QUARTO', accessor: 'Group B QUARTO' },
            ]
          },
          {
            Header: 'Gruppo C',
            columns: [
              { Header: 'PRIMO', accessor: 'Group C PRIMO' },
              { Header: 'SECONDO', accessor: 'Group C SECONDO' },
              { Header: 'TERZO', accessor: 'Group C TERZO' },
              { Header: 'QUARTO', accessor: 'Group C QUARTO' },
            ]
          },
          {
            Header: 'Gruppo D',
            columns: [
              { Header: 'PRIMO', accessor: 'Group D PRIMO' },
              { Header: 'SECONDO', accessor: 'Group D SECONDO' },
              { Header: 'TERZO', accessor: 'Group D TERZO' },
              { Header: 'QUARTO', accessor: 'Group D QUARTO' },
            ]
          },
          {
            Header: 'Gruppo E',
            columns: [
              { Header: 'PRIMO', accessor: 'Group E PRIMO' },
              { Header: 'SECONDO', accessor: 'Group E SECONDO' },
              { Header: 'TERZO', accessor: 'Group E TERZO' },
              { Header: 'QUARTO', accessor: 'Group E QUARTO' },
            ]
          },
          {
            Header: 'Gruppo F',
            columns: [
              { Header: 'PRIMO', accessor: 'Group F PRIMO' },
              { Header: 'SECONDO', accessor: 'Group F SECONDO' },
              { Header: 'TERZO', accessor: 'Group F TERZO' },
              { Header: 'QUARTO', accessor: 'Group F QUARTO' },
            ]
          },
          {
            Header: 'Gruppo G',
            columns: [
              { Header: 'PRIMO', accessor: 'Group G PRIMO' },
              { Header: 'SECONDO', accessor: 'Group G SECONDO' },
              { Header: 'TERZO', accessor: 'Group G TERZO' },
              { Header: 'QUARTO', accessor: 'Group G QUARTO' },
            ]
          },
          {
            Header: 'Gruppo H',
            columns: [
              { Header: 'PRIMO', accessor: 'Group H PRIMO' },
              { Header: 'SECONDO', accessor: 'Group H SECONDO' },
              { Header: 'TERZO', accessor: 'Group H TERZO' },
              { Header: 'QUARTO', accessor: 'Group H QUARTO' },
            ]
          },
          {
            Header: 'Ottavi',
            columns: [
              { Header: 'MATCH 1', accessor: 'OTTAVI MATCH 1' },
              { Header: 'MATCH 2', accessor: 'OTTAVI MATCH 2' },
              { Header: 'MATCH 3', accessor: 'OTTAVI MATCH 3' },
              { Header: 'MATCH 4', accessor: 'OTTAVI MATCH 4' },
              { Header: 'MATCH 5', accessor: 'OTTAVI MATCH 5' },
              { Header: 'MATCH 6', accessor: 'OTTAVI MATCH 6' },
              { Header: 'MATCH 7', accessor: 'OTTAVI MATCH 7' },
              { Header: 'MATCH 8', accessor: 'OTTAVI MATCH 8' },
            
            ]
          },
          {
            Header: 'Quarti',
            columns: [
              { Header: 'MATCH 1', accessor: 'QUARTI MATCH 1' },
              { Header: 'MATCH 3', accessor: 'QUARTI MATCH 3' },
              { Header: 'MATCH 2', accessor: 'QUARTI MATCH 2' },
              { Header: 'MATCH 4', accessor: 'QUARTI MATCH 4' },
              
            ]
          },
          {
            Header: 'Finali',
            columns: [
              { Header: 'SEMIFINALE 1', accessor: 'SEMIFINALE 1' },
              { Header: 'SEMIFINALE 2', accessor: 'SEMIFINALE 2' },
              { Header: 'FINALE TERZO/QUARTO', accessor: ' FINALE TERZO/QUARTO' },
              { Header: 'FINALE', accessor: ' FINALE' },
            ]
          },
        ],
        []
      )
    
      const data = React.useMemo(() => makeData(), [])
    return (
        <>
        <Styles>
        <Table data={data} columns={columns} initialSortBy={{id: 'Nome', desc: false}}></Table>
        </Styles>
        </>
    );
}

export default Grid;
