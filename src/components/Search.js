import { Divider, Input, Col } from 'antd';


function Search(props) {
    return (
      <Col>
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input value={undefined} type="text" onChange={() => {}} />
      </Col>
    );
  }
  
  export default Search;
  