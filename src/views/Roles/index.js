import React, { Component } from 'react';
import Datatable from '../base/Datatable/Datatable';
import withBreadcrumb from '../../hoc/withBreadcrumb';
import withActiveSidebarItem from '../../hoc/withActiveSidebarItem';
import asyncComponent from '../../hoc/asyncComponent';

const QuickEdit = asyncComponent(() => import('./edit'), 'QuickEdit');

const activeSidebarItem = 'مشاهده گروه های کاربری';

const breadcrumb = [{text: 'گروه های کاربری', url: '', active: true}];

class Roles extends Component {

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className="card-header">لیست گروه های کاربری</div>
                        <div className='card-body'>
                            <Datatable route='roles' QuickEdit={QuickEdit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withActiveSidebarItem(withBreadcrumb(Roles, breadcrumb), activeSidebarItem);