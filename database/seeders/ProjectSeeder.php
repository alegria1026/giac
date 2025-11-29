<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            // Ingeniería
            [
                'user_id' => 1,
                'name' => 'Optimización de procesos térmicos',
                'description' => 'Estudio para mejorar eficiencia energética en procesos térmicos.',
                'category' => 'Ingeniería',
                'attached_file' => 'projects/procesos_termicos.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Diseño de planta química',
                'description' => 'Diseño conceptual y detallado de una planta química.',
                'category' => 'Ingeniería',
                'attached_file' => 'projects/planta_quimica.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Automatización de líneas de producción',
                'description' => 'Integración de sistemas automáticos en producción industrial.',
                'category' => 'Ingeniería',
                'attached_file' => 'projects/automatizacion_produccion.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Supervisión eléctrica',
                'description' => 'Supervisión técnica en instalación de sistemas eléctricos.',
                'category' => 'Ingeniería',
                'attached_file' => 'projects/supervision_electrica.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Diseño estructural',
                'description' => 'Cálculo y diseño estructural de edificios industriales.',
                'category' => 'Ingeniería',
                'attached_file' => 'projects/diseno_estructural.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            // Construcción
            [
                'user_id' => 2,
                'name' => 'Montaje de nave industrial',
                'description' => 'Construcción y montaje de nave industrial de acero.',
                'category' => 'Construcción',
                'attached_file' => 'projects/nave_industrial.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Obra civil para planta',
                'description' => 'Ejecución de cimentaciones y estructuras civiles.',
                'category' => 'Construcción',
                'attached_file' => 'projects/obra_civil.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Rehabilitación de tanque',
                'description' => 'Reparación estructural de tanque de almacenamiento.',
                'category' => 'Construcción',
                'attached_file' => 'projects/tanque_rehabilitacion.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Instalación de tuberías',
                'description' => 'Montaje de líneas de tubería para proceso industrial.',
                'category' => 'Construcción',
                'attached_file' => 'projects/tuberias.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Construcción de almacén',
                'description' => 'Obra nueva para almacén de productos terminados.',
                'category' => 'Construcción',
                'attached_file' => 'projects/almacen.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
