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
            data: [{index: 1, title: "Puigdemont pasa a disposicion judicial", category: "nacional", publishDate: "22/12/2017", keywords: "Puigdemont, Catalunya, elecciones, Rajoy"}]
        });
    }
  render() {
    return (
        <ReactTable
          data={this.state.data}
          columns={[
            {
              Header: "Top 10 Stories",
                columns: [
                {
                  Header: "Index",
                  accessor: "index"
                },
                {
                  Header: "Publish Date",
                  accessor: "publishDate"
                },
                {
                  Header: "Title",
                  accessor: "title"
                },
                {
                  Header: "Category",
                  accessor: "category"
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
