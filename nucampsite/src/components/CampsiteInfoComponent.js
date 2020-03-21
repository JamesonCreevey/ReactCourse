import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderCampsite(props) {
        console.log(props)
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={props.campsite.image} alt={props.campsite.name} />
                    <CardBody>
                        <CardTitle>{props.campsite.name}</CardTitle>
                        <CardText>{props.campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(props) {
        if(props.comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {props.comments.map(comment => {
                        return (
                            <div>
                                <p>{comment.text}</p>
                                <p>{comment.author}: {comment.date}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return (
            <div></div>
        );
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    <this.renderCampsite campsite={this.props.campsite} />
                    <this.renderComments comments={this.props.campsite.comments}/>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}



export default CampsiteInfo;