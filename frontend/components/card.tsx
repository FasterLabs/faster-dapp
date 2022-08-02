import React, { Component } from 'react';
import Image from 'next/image';

type Props = {title: string, subtitle: string, desc: string};

type State = {};

export default class Card extends Component<Props, State> {
    state = {};

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image ">
                        <Image
                            src="https://bulma.io/images/placeholders/1280x960.png"
                            alt="Placeholder image"
                            width={200}
                            height={200}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <Image
                                    src="https://bulma.io/images/placeholders/96x96.png"
                                    alt="Placeholder image"
                                    width={50}
                                    height={50}
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{this.props.title}</p>
                            <p className="subtitle is-6">{this.props.subtitle}</p>
                        </div>
                    </div>

                    <div className="content">
                        {this.props.desc}
                    </div>
                </div>
            </div>
        );
    }
}
