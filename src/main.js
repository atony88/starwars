import React, { PureComponent} from 'react'

class Main extends PureComponent {

    state = {
        people: {},
    }

    fetchPeople = () => {
        fetch(`https://swapi.co/api/people`)
            .then(response => response.json)
            .then(json => {
                console.log(json)
                return json.results
            })
    }

    componentDidMount() {
        this.setState({ people: this.fetchPeople()})
        console.log(this.state.people)
    }

    render() {
        return(
            <div>
                <h1>Star Wars App </h1>
                <select >
                    <option value="0">None</option>
                    <option value="1">Luke Skywalker</option>
                    <option value="2">C-3PO</option>
                    <option value="6">Owen Lars</option>
                </select>
     
                <div>
                    <div>Height:  </div>
                    <div>Mass:  </div>

                    <h2>Move list</h2>
                    <div>Last seen in: ????(movie name / movie date). *use release_date prop to compare</div>
                </div>
            </div>
        )
    }
}

export default Main