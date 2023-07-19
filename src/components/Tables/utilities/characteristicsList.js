export const tablesList = [
    {
        label: "Buscar por trabajador",
        title: "Lista de trabajadores",
        input : "workers-searcher",
        inputType : "text",
        inputClass : "text-searcher",
        entries:[
            "Nombre",
            "Especialidad",
            "Sucursal",     
            "Disponibilidad",       
            "Contacto", 
            "Dirección",
            "Email",
            "Modificar",
        ],
        properties : [
            "name" , 
            "specialty",
            "branch",
            "availability",
            "phone",
            "address",
            "email",
        ]
    },
    {
        label: "Buscar por paciente",
        title: "Lista de pacientes",
        input : "patients-searcher",
        inputType : "text",
        inputClass : "text-searcher"
    },
    {
        label: "Buscar por fecha",
        title: "Lista de citas médicas",
        input : "appointment-searcher",
        inputType : "date",
        inputClass : "text-date"
    },

]