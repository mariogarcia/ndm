import ReactTable from "react-table";
import React from 'react';
import "react-table/react-table.css";

export class TopStories extends React.Component {
  constructor() {
    super();
    this.state = {
        data: []
    };
  }

    componentDidMount() {
        this.setState( {
            data: [
                {index: 1, name: "El Mundo", site: "www.elmundo.es", keywords: "Puigdemont, Catalunya, elecciones, Rajoy"},
                {index: 2, name: "ABC", site: "www.abc.es", keywords: "Puigdemont, Catalunya, elecciones, Rajoy"},
                {index: 3, name: "El Pais", site: "www.elpais.com", keywords: "Puigdemont, Catalunya, elecciones, Rajoy"}
            ]
        });
    }
  render() {
      return (
          <ReactTable
              data={this.state.data}
              columns={[
                  {
                      columns: [
                          {
                              Header: "Index",
                              accessor: "index"
                          },
                          {
                              Header: "Name",
                              accessor: "name"
                          },
                          {
                              Header: "Site",
                              accessor: "site"
                          },
                          {
                              Header: "Keywords",
                              accessor: "keywords"
                          }
                      ]
                  }
              ]}

              className="-striped -highlight"
              />
      );
  }
}
