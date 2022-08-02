import React, { Component } from 'react';
import Image from 'next/image';

type Props = {};

type State = {};

export default class Navbar extends Component<Props, State> {
    state = {};
    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Image src="/favicon.ico" width="100" height="100" />
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button is-primary">
                                <strong>Connect Wallet</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
