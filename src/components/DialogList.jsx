import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Dialog, { DialogTitle, DialogContent } from '@material/react-dialog'
import List, { ListItem, ListItemText, ListItemGraphic } from '@material/react-list'

import "@material/react-dialog/dist/dialog.css";
import '@material/react-list/dist/list.css';

const DialogList = ({ isOpen, onClose, title, list, history }) => (
    <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <section>
                <List twoLine>
                    {list && list.map(person => (
                        <ListItem key={person.id} onClick={() => history.push(`/person/${person.id}`)}>
                            <ListItemGraphic graphic={<img src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`} />} />
                            <ListItemText
                                primaryText={person.name}
                                secondaryText={(person.character) ? person.character : person.department}
                            />
                        </ListItem>
                    ))}
                </List>
            </section>
        </DialogContent>
    </Dialog>
)

export default withRouter(DialogList)