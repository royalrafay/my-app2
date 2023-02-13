
import {Form,Button} from 'react-bootstrap';
export const Validation=()=>{
const submit=(e)=>{
    e.preventdefault()
}
  return (
    <Form className='w-50 m-5' onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter FirstName" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter LastName" />
        
      </Form.Group>

     
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}
