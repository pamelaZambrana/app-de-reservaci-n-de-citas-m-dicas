export const tablesList = [
    {
        label: "Buscar por trabajador",
        title: "Lista de trabajadores",
        input : "workers-searcher",
        inputType : "text",
        inputClass : "text-searcher",
        properties : {
            name : "Nombre" , 
            specialty : "Especialidad",
            branch : "Sucursal",
            availability : "Disponibilidad",
            phone : "Contacto",
            address : "Dirección",
            email : "Email",
        }
    },
    {
        label: "Buscar por paciente",
        title: "Lista de pacientes",
        input : "patients-searcher",
        inputType : "text",
        inputClass : "text-searcher",
        properties : {
            name : "Nombre", 
            specialty : "Especialidad",
            branch : "Sucursal",
            availability : "Turno",
            phone : "Contacto",
            address : "Dirección",
            email : "Email",
        }
    },
    {
        label: "Buscar por fecha",
        title: "Lista de citas médicas",
        input : "appointment-searcher",
        inputType : "date",
        inputClass : "text-date",
        properties : {
            sch : "Horario",
            branch : "Sucursal",
            name : "Nombre del paciente",     
            cellphone : "Celular",       
            doctor : "Doctor", 
            specialty: "Especialista",       
        }
    },

]

const object = [
    {name:"nombre"},
   { edad : "age"}
];
console.log(object.length)