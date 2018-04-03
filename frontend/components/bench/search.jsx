import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = (props) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Bench!</h5>
      <BenchMap
        benches={props.benches}
      />
    </div>
    <div className="right-half">
      <BenchIndex
      benches={props.benches}
      fetchBenches={props.fetchBenches}/>
    </div>
  </div>
);

export default Search;
