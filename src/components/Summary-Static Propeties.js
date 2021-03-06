// Validating props with CreateClass
import React, { Component } from 'react'

import PropTypes from 'prop-types'


class Summary extends Component {

    static propTypes = {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        // Custom prop validation is implemented with help of functions
        title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                // Creates an error object which is thrown at run time
                new Error("A title must be a string") :
                (props[propName].length > 20) ?
                    new Error("Title is over 20 characters") : null

    }

    static defaultProps = {
        ingredients: 0,
        steps: 0,
        title: "[recipe]"
    }

    render() {

        const { ingredients, steps, title } = this.props
        return (
            <div className="summary">
                <h1>Using Static Properties</h1>
                <h2>{title}</h2>
                <p>
                    <span>{ingredients.length} Ingredients</span> |
                <span>{steps.length} Steps</span>
                </p>
            </div>)
    }
}

export default Summary