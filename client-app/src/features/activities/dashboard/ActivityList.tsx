import React, {useContext, Fragment } from 'react'
import { Item, Segment, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import ActivityListitem from './ActivityListitem';


 const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {activitiesByDate} = activityStore;
  return (
    <Segment>
      {activitiesByDate.map(([group, activities]) => (
        <Fragment  key={group}>
        <Label size='large' color='blue'>
          {group}
        </Label>
        <Item.Group divided>
          {activities.map(activity => (
            <ActivityListitem key={activity.id} activity={activity}/>
          ))}
        </Item.Group>
      </Fragment>
      ))}

    </Segment>
    
  );
};

export default observer(ActivityList);

