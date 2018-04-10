import React, { Component } from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div``;

class MeetFounders extends Component {
    render() {
        const { children } = this.props;
        return (
            <ComponentWrapper>
                {children}
            </ComponentWrapper>
        );
    }
}

export default MeetFounders;
