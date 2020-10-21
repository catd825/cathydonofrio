import React from 'react'
import { SiReact } from "react-icons/si";
import { SiRails } from "react-icons/si";

class WorkContainer extends React.Component {
    render() {
        return (
            <div className="container" id="portfolio">
                <h3>PROJECTS</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h5>budgetBuddy</h5>
                                    A simple way to create and modify monthly budgets and transactions.  This is a capstone project for the Flatiron School.
                                <br/>
                                <p><b>Technologies Used:</b>  &nbsp;&nbsp;
                                <SiReact size={30}/>&nbsp;&nbsp;<SiRails size={30}/>
                                </p>
                                    <b><a href="https://youtu.be/xrYvw2IYEmI" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/catd825/budgetBuddy_frontend" target="_blank" rel="noopener noreferrer">GitHub</a></b>
                            </td>
                            <td>
                                <img height="60%" src="https://j.gifs.com/915YWB.gif" alt="budgetBuddy"></img>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img height="60%" src="https://j.gifs.com/L7oDK4.gif" alt="feelingsOverflow"></img>
                            </td>
                            <td>
                                <h5>feelingsOverflow</h5>
                                Forum-based app in which users post, comment, and vote on mental health questions and concerns.
                                <br/>
                                <p><b>Technologies Used:</b>  &nbsp;&nbsp;
                                <SiReact size={30}/>&nbsp;&nbsp;<SiRails size={30}/>
                                </p>
                                <b><a href="https://j.gifs.com/L7oDK4.gif" target="_blank" rel="noopener noreferrer">Demo</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/catd825/feelingsOverflow-front-end">Github</a></b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>Fluffy Tail</h5>
                                Fluffy tail is a Ruby on Rails app that allows you to browse and favorite pets to adopt in the NY Metro area. 
                                <br/>
                                <p><b>Technologies Used:</b>  &nbsp;&nbsp;
                                <SiRails size={30}/>
                                </p>
                                    <b><a href="https://youtu.be/scLpLe3zIxI" target="_blank" rel="noopener noreferrer">Demo</a> | <a href="https://github.com/catd825/fluffy_tail" target="_blank" rel="noopener noreferrer">GitHub</a></b>
                            </td>
                            <td><img height="60%" src="https://j.gifs.com/NLqWyN.gif" alt="fluffy tail"></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default WorkContainer