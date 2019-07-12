import React from 'react'
import {Divider, Grid, Icon, Segment, Transition} from "semantic-ui-react";

export default (props) => {
        return (
            <Transition
                unmountOnHide={true}
                animation={"fade up"}
                duration={{ show:500 }}
                transitionOnMount={true}
                key={`client-content-item-${props.name}`}
            >
            <Grid>
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={11}>
                        <Segment className={'breadCrumb'}>
                            <Icon name={'home'}/> {props.breadCrumb}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={1}/>
                    <Grid.Column width={11}>
                        <Segment className={'client-content-segment'}>
                            <div>
                                <Divider horizontal className={'mainTitleContentClient'}><b>{props.name} | </b>
                                    <span className={'dividerSub'}> {props.description}</span></Divider>
                            </div>
                            {props.children}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Transition>
        )
}