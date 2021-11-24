import React, {useState, useEffect} from 'react';
import faker from "faker";
import './style.css';

const GeneratorListUserName = () => {
    useEffect(() => {
        let username = "";
        for (let i = 3; i < 100; i++) {
            username += faker.internet.userName() + "<br>";
        }
        document.getElementById("demo").innerHTML = username;

        let mails = "";
        for (let i = 3; i < 100; i++) {
            mails += faker.internet.email() + "<br>";
        }
        document.getElementById("demo_mail").innerHTML = mails;

        let names = "";
        for (let i = 3; i < 100; i++) {
            names += faker.name.findName() + "<br>";
        }
        document.getElementById("demo_name").innerHTML = names;

        let Lastnames = "";
        for (let i = 3; i < 100; i++) {
            Lastnames += faker.name.lastName() + "<br>";
        }
        document.getElementById("last_name").innerHTML = Lastnames;

        let Firstnames = "";
        for (let i = 3; i < 100; i++) {
            Firstnames += faker.name.firstName() + "<br>";
        }
        document.getElementById("first_name").innerHTML = Firstnames;

        let Numberrandom = "";
        for (let i = 3; i < 100; i++) {
            Numberrandom += faker.finance.routingNumber() + "<br>";
        }
        document.getElementById("number").innerHTML = Numberrandom;


        let ListMailnesia = "";
        for (let i = 3; i < 100; i++) {
            ListMailnesia += faker.internet.userName() + "@mailnesia.com" +"<br>";
        }
        document.getElementById("ListMailnesia").innerHTML = ListMailnesia;


        let Listyopmail = "";
        for (let i = 3; i < 100; i++) {
            Listyopmail += faker.internet.userName() + "@yopmail.com" +"<br>";
        }
        document.getElementById("Lisyopmai").innerHTML = Listyopmail;

    }, []);
    return (
        <div className="Table_item">
            <div>
                <h1>username</h1>
                <div id="demo" />
            </div>
            <div>
                <h1>mail</h1>
                <div id="demo_mail"/>
            </div>
            <div>
                <h1>name full</h1>
                <div id="demo_name"/>
            </div>
            <div>
                <h1>last name</h1>
                <div id="last_name"/>
            </div>
            <div>
                <h1>first name</h1>
                <div id="first_name"/>
            </div>
            <div>
                <h1>number</h1>
                <div id="number"/>
            </div>
            <div>
                <h1>number</h1>
                <div id="ListMailnesia"/>
            </div>

            <div>
                <h1>yopmail </h1>
                <div id="Lisyopmai"/>
            </div>

            
        </div>
    );
}

export default GeneratorListUserName;
