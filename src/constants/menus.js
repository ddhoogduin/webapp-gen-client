export const  clientMenu = {items:[
        {
            'name':'About',
            'subMenu': true,
            'icon':'question circle',
            'items' : [
                {
                'name': 'General',
                'action': '/form'
                },
                {
                    'name': 'Timeline',
                    'action': '/inputs'
                },
                {
                    'name': 'Output examples',
                    'action': '/inputs'
                }
            ]
        },
        {
            'name':'How to use',
            'subMenu': true,
            'icon':'mouse pointer',
            'items' : [
                {
                    'name': 'General',
                    'action': '/form'
                }
            ]
        },
        {
            'name':'Downloads',
            'subMenu': true,
            'icon':'cloud download',
            'items' : [
                {
                    'name': 'General',
                    'action': '/form'
                },
                {
                    'name': 'Dataset groups',
                    'action': '/form'
                },
                {
                    'name': 'Datasets',
                    'action': '/form'
                }
            ]
        }
        ,
        {
            'name':'Tool configuration',
            'subMenu': true,
            'icon':'configure',
            'items' : [
                        {
                            'name': 'General',
                            'action': '/form'
                        },
                        {
                            'name': 'Form',
                            'action': '/form'
                        },
                        {
                            'name': 'Input fields',
                            'action': '/inputs'
                        }
            ]
        },
        {
            'name':'FAQ',
            'subMenu': true,
            'icon':'talk',
            'items' : [
                {
                    'name': 'General',
                    'action': '/form'
                },
                {
                    'name': 'FAQs',
                    'action': '/form'
                }
            ]
        },
        {
            'name':'Contacts',
            'subMenu': true,
            'icon':'users',
            'items' : [
                {
                    'name': 'General',
                    'action': '/form'
                },
                {
                    'name': 'People',
                    'action': '/form'
                }
            ]
        }
    ]
};