import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table} from 'react-bootstrap';
import Info from './Info';
import { Link, useNavigate } from 'react-router-dom';



const Home = () => {

  let history = useNavigate();
 
  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, name, email, phone) {
      localStorage.setItem("Id", id);
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Phone", phone);
  }

 
  function handleDelete(id) {
      let index = Info
          .map(function (e) {
              return e.Id;
          })
          .indexOf(id);

    
     Info.splice(index, 1);
      history("/");
  }



  return (
    <>
   <div style={{ margin: "5rem" }}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {Info.map((item) => {
                        return (
                            <tr>
                                <td>{item.Id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.Phone}</td>
 
                             
                                <td>
                                    <Link to={`/edit`}>
                                        <Button
                                            onClick={(e) =>
                                                setID(
                                                    item.Id,
                                                    item.Name,
                                                    item.Email,
                                                    item.Phone,
                                                )
                                            }
                                            variant="info">
                                            Update
                                        </Button>
                                    </Link>
                                </td>
 
                                {/* Using thr deleted function passing
                                    the id of an entry */}
                                <td>
                                    <Button
                                        onClick={(e) =>
                                            handleDelete(item.Id)
                                        }
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
<br>
</br>
<Link className="d-grid gap-2" to="/create">
                <Button variant="warning" size="lg">
                    Create
                </Button>
            </Link>
        </div>
    </>
  )
}

export default Home