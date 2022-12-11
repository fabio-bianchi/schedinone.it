import React from 'react';
import Table from '../Table';
import results from '../results.json';
import scores from '../scores.json';
import styled from 'styled-components';

const Styles = styled.div`
  padding: 1rem;
  font-size:0.9rem;
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

function Results(){
    const findValue = (key) => {
      let result = "";
      scores.forEach((s) => {
        if (s.Voce == key){
          result = s.Risultato;
        }
      });
      return result;
    };
    const scoreColumns = React.useMemo(
        () => [
            {
              Header: 'Parziali',
              columns: [
                {
                  Header: 'Voce',
                  accessor: 'Voce',
                },
                {
                  Header: 'Risultato',
                  accessor: 'Risultato',
                }
              ],
            },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
          {
            Header: 'Nome Squadra',
            columns: [
              {
                Header: 'Nome',
                accessor: 'Nome',
              },
              {
                Header: 'Totale',
                accessor: 'Totale',
              }
            ],
          },
          {
            Header: 'Scommesse singole',
            columns: [
                { Header: 'Capocannoniere', accessor: 'Capocannoniere'},
                { Header: 'Miglior portiere', accessor: 'Miglior portiere' },
                { Header: 'Squadra con miglior attacco', accessor: 'Squadra con miglior attacco' },
                { Header: 'Squadra con peggior difesa', accessor: 'Squadra con peggior difesa' },
                { Header: "Girone con piu' gol", accessor: "Girone con piu' gol" },
                { Header: 'MVP', accessor: 'MVP' },
            ]
          },
        ],
        []
    );

    const columns2 = React.useMemo(
        () => [
          {
            Header: 'Nome Squadra',
            columns: [
              {
                Header: 'Nome',
                accessor: 'Nome',
              },
              {
                Header: 'Totale',
                accessor: 'Totale',
              }
            ],
          },
          {
            Header: 'Gruppo A',
            columns: [
              { Header: 'PRIMO A', accessor: ((rows) => rows['Group A [PRIMO]']) },
              { Header: 'SECONDO A', accessor: ((rows) => rows['Group A [SECONDO]']) },
              { Header: 'TERZO A', accessor: ((rows) => rows['Group A [TERZO]']) },
              { Header: 'QUARTO A', accessor: ((rows) => rows['Group A [QUARTO]']) },
              
           
            ]
          },
          {
            Header: 'Gruppo B',
            columns: [
              { Header: 'PRIMO B', accessor: ((rows) => rows['Group B [PRIMO]']) },
              { Header: 'SECONDO B', accessor: ((rows) => rows['Group B [SECONDO]']) },
              { Header: 'TERZO B', accessor: ((rows) => rows['Group B [TERZO]']) },
              { Header: 'QUARTO B', accessor: ((rows) => rows['Group B [QUARTO]']) },
            ]
          },
          {
            Header: 'Gruppo C',
            columns: [
              { Header: 'PRIMO C', accessor: ((rows) => rows['Group C [PRIMO]']) },
              { Header: 'SECONDO C', accessor: ((rows) => rows['Group C [SECONDO]']) },
              { Header: 'TERZO C', accessor: ((rows) => rows['Group C [TERZO]']) },
              { Header: 'QUARTO C', accessor: ((rows) => rows['Group C [QUARTO]']) },
            ]
          },
          {
            Header: 'Gruppo D',
            columns: [
              { Header: 'PRIMO D', accessor: ((rows) => rows['Group D [PRIMO]']) },
              { Header: 'SECONDO D', accessor: ((rows) => rows['Group D [SECONDO]']) },
              { Header: 'TERZO D', accessor: ((rows) => rows['Group D [TERZO]']) },
              { Header: 'QUARTO D', accessor: ((rows) => rows['Group D [QUARTO]']) },
            ]
          },
          {
            Header: 'Gruppo E',
            columns: [
              { Header: 'PRIMO E', accessor: ((rows) => rows['Group E [PRIMO]']) },
              { Header: 'SECONDO E', accessor: ((rows) => rows['Group E [SECONDO]']) },
              { Header: 'TERZO E', accessor: ((rows) => rows['Group E [TERZO]']) },
              { Header: 'QUARTO E', accessor: ((rows) => rows['Group E [QUARTO]']) },
            ]
          },
          {
            Header: 'Gruppo F',
            columns: [
              { Header: 'PRIMO', accessor: ((rows) => rows['Group F [PRIMO]']) },
              { Header: 'SECONDO', accessor: ((rows) => rows['Group F [SECONDO]']) },
              { Header: 'TERZO', accessor: ((rows) => rows['Group F [TERZO]']) },
              { Header: 'QUARTO', accessor: ((rows) => rows['Group F [QUARTO]']) },
            ]
          },
          {
            Header: 'Gruppo G',
            columns: [
              { Header: 'PRIMO G', accessor: ((rows) => rows['Group G [PRIMO]'])},
              { Header: 'SECONDO G', accessor: ((rows) => rows['Group G [SECONDO]']) },
              { Header: 'TERZO G', accessor:  ((rows) => rows['Group G [TERZO]']) },
              { Header: 'QUARTO G', accessor:  ((rows) => rows['Group G [QUARTO]']) },
            ]
          },
          {
            Header: 'Gruppo H',
            columns: [
              { Header: 'PRIMO H', accessor:  ((rows) => rows['Group H [PRIMO]']) },
              { Header: 'SECONDO H', accessor: ((rows) => rows['Group H [SECONDO]']) },
              { Header: 'TERZO H', accessor: ((rows) => rows['Group H [TERZO]']) },
              { Header: 'QUARTO H', accessor: ((rows) => rows['Group H [QUARTO]']) },
            ]
          },
        ],
        []
    );

    const columns3 = React.useMemo(
        () => [
          {
            Header: 'Nome Squadra',
            columns: [
              {
                Header: 'Nome',
                accessor: 'Nome',
              },
              {
                Header: 'Totale',
                accessor: 'Totale',
              }
            ],
          },
          {
            Header: 'Ottavi',
            columns: [
              { Header: 'MATCH 1', accessor: ((rows) => rows['OTTAVI [Match 1]']) },
              { Header: 'MATCH 2', accessor: ((rows) => rows['OTTAVI [Match 2]']) },
              { Header: 'MATCH 3', accessor: ((rows) => rows['OTTAVI [Match 3]']) },
              { Header: 'MATCH 4', accessor: ((rows) => rows['OTTAVI [Match 4]']) },
              { Header: 'MATCH 5', accessor: ((rows) => rows['OTTAVI [Match 5]']) },
              { Header: 'MATCH 6', accessor: ((rows) => rows['OTTAVI [Match 6]']) },
              { Header: 'MATCH 7', accessor: ((rows) => rows['OTTAVI [Match 7]']) },
              { Header: 'MATCH 8', accessor: ((rows) => rows['OTTAVI [Match 8]']) },
            
            ]
          },
        ],
        []
    );

    const columnsQuarter = React.useMemo(
      () => [
        {
          Header: 'Nome Squadra',
          columns: [
            {
              Header: 'Nome',
              accessor: 'Nome',
            },
            {
              Header: 'Totale',
              accessor: 'Totale',
            }
          ],
        },
        {
          Header: 'Quarti',
          columns: [
            { Header: 'MATCH 1', accessor: ((rows) => rows['QUARTI [Match 1]']) },
            { Header: 'MATCH 2', accessor: ((rows) => rows['QUARTI [Match 2]']) },
            { Header: 'MATCH 3', accessor: ((rows) => rows['QUARTI [Match 3]']) },
            { Header: 'MATCH 4', accessor: ((rows) => rows['QUARTI [Match 4]']) },
          
          ]
        },
        {
          Header: 'Semi',
          columns: [
            { Header: 'SEMI MATCH 1', accessor: ((rows) => rows['SEMIFINALE [Match 1]']) },
            { Header: 'SEMI MATCH 2', accessor: ((rows) => rows['SEMIFINALE [Match 2]']) },
          
          ]
        },
      ],
      []
  );
    return (
    <>
        <Styles>
            <Table data={scores} columns={scoreColumns} initialSortBy={{}}></Table>
        </Styles>

        <Styles>
            <Table data={results} columns={columnsQuarter} initialSortBy={ {
                id: 'Totale',
                desc: true
            }}></Table>
        </Styles>

        <Styles>
            <Table data={results} columns={columns3} initialSortBy={ {
                id: 'Totale',
                desc: true
            }}></Table>
        </Styles>

        <Styles>
            <Table data={results} columns={columns} initialSortBy={ {
                id: 'Totale',
                desc: true
            }}></Table>
        </Styles>

        <Styles>
            <Table data={results} columns={columns2} initialSortBy={ {
                id: 'Totale',
                desc: true
            }}></Table>
        </Styles>

        
    </>)
}

export default Results;
