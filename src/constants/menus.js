export const  clientMenu = {items:[
        {
            'name':'Home',
            'icon':'home',
            'action':''
        },
        {
            'name':'Appearance',
            'icon':'image',
            'action':''
        },
        {
            'name': 'Content',
            'icon': 'font',
            'action': ''

        },
        {
            'name':'Form configuration',
            'subMenu': true,
            'icon':'clipboard',
            'items' : [{
                            'name': 'Forms',
                            'action': '/forms'
                        },
                        {
                            'name': 'Input fields',
                            'action': '/inputs'
                        }
            ]
        },
        {
            'name':'Graphs',
            'icon':'area graph',
            'action':''
        },
        {
            'name':'Validation rules',
            'icon':'list ol',
            'action':''
        },
        {
            'name':'Configuration',
            'icon':'cog',
            'action':''
        },
        {
            'name':'Statistics',
            'icon':'chart bar',
            'action':''
        }]
};