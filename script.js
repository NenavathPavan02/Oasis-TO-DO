*,
*:before,
*:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    height: 100vh;
    background: linear-gradient(to right, #F9D423, #FF4E50);

}
.container{
    width: 40%;
    min-width: 450px;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    padding: 30px 40px;
}
#newtask{
    position: relative;
    background-color: #ffffff;
    padding: 30px 20px;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}
#newtask input{
    width: 70%;
    width: 70%;
    height: 45px;
    font-family: 'Poppins',sans-serif;
    font-size: 15px;
    border: 2px solid #d1d3d4;
    padding: 12px;
    color: #111111;
    font-weight: 500;
    position: relative;
    border-radius: 5px;
}
#newtask input:focus{
    outline: none;
    border-color: #F9D423;
}

#newtask button{
    position: relative;
    float: right;
    width: 20%;
    height: 45px;
    border-radius: 5px;
    font-family: 'Poppins',sans-serif;
    font-weight: 500;
    font-size: 16px;
    background: #FF4E50;
    border: none;
    color: #ffffff;
    cursor: pointer;
    outline: none;
}
#tasks{
    background-color: #ffffff;
    padding: 30px 20px;
    margin-top: 60px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    width: 100%;
    position: relative;
}
.task{
    background-color: #ffffff;
    height: 50px;
    padding: 5px 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #d1d3d4;
    cursor: pointer;
}
.task span{
    font-family: 'Poppins',sans-serif;
    font-size: 15px;
    font-weight: 400;
}
.task button{
    background-color: #FF4E50;
    color: #ffffff;
    height: 100%;
    width: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    outline: none;
}
.completed{
    text-decoration: line-through;
}
