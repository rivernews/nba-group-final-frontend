import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from "d3";
import "d3-selection-multi";

class ExampleViz extends Component {
    static propTypes = {
        svgSize: PropTypes.shape({
            availableSpace: PropTypes.shape({
                width: PropTypes.number,
                height: PropTypes.number,
            }),
            margin: PropTypes.shape({
                top: PropTypes.number,
                left: PropTypes.number,
                right: PropTypes.number,
                bottom: PropTypes.number,
            })
        })
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.initializeVizSpace()
        this.drawExample()
    }

    componentDidUpdate() {
        this.drawExample()
    }

    /**
     * D3 Wrapper Functions
     */
    initializeVizSpace() {
        this.svg = d3.select(this.node)
            .attrs({
                viewBox: `0 0 ${this.getSvgOuterWidth()} ${this.getSvgOuterHeight()}`,
                preserveAspectRatio: `xMidYMid meet`
            })
        ;

        this.svg = this.svg.append("g")
            .attrs({
                "transform": `translate(${this.props.svgSize.margin.left}, ${this.props.svgSize.margin.top})`,
            })
        ;
    }

    drawExample() {
        this.svg.append('rect')
        .attrs({
            x: 20,
            y: 20,
            width: '100px',
            height: '400px'
        })
        .styles({
            fill: 'red'
        })
        ;
    }

    /**
     * Helper Functions
     */
    getSvgOuterWidth() {
        return (
            this.props.svgSize.availableSpace.width +
            this.props.svgSize.margin.left +
            this.props.svgSize.margin.right
        )
    }

    getSvgOuterHeight() {
        return (
            this.props.svgSize.availableSpace.height +
            this.props.svgSize.margin.top +
            this.props.svgSize.margin.bottom
        )
    }

    render() {
        return (
            <div>
                <svg className="svg-content" ref={node => this.node = node}>
                </svg>
            </div>
        )
    }
}

export { ExampleViz };