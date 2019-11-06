import React from 'react';
import Button from '@material-ui/core/Button';

const Home = () => (
    <div className="container">
        <h4>Welcome to Godfreya's!</h4>
        <img id="home-pic" src="http://3.bp.blogspot.com/-zF7_8YHOOT4/VSFOSWHwukI/AAAAAAAADeE/wdbDbs6JbRg/s1600/19.jpg" />
        <Button
          variant="contained"
          color="secondary"
          type="submit">
          Make a reservation
        </Button>
    </div>
)


export default Home;
