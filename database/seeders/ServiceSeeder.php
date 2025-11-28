<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('services')->insert([
            [
                'user_id' => 1,
                'name' => 'Inspección de ductos',
                'description' => 'Inspección técnica de ductos con drones y sensores.',
                'status' => 'Ingeniería',
                'attached_file' => 'services /inspeccion_ductos.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Mantenimiento de válvulas',
                'description' => 'Revisión y mantenimiento de válvulas industriales.',
                'status' => 'Construcción',
                'attached_file' => 'services/mantenimiento_valvulas.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Supervisión de obras',
                'description' => 'Supervisión de obras civiles en plantas industriales.',
                'status' => 'Ingeniería',
                'attached_file' => 'services/supervision_obras.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Soldadura especializada',
                'description' => 'Servicios de soldadura de alta presión.',
                'status' => 'Construcción',
                'attached_file' => 'services/soldadura.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Diseño de plantas',
                'description' => 'Diseño y simulación de plantas de procesamiento.',
                'status' => 'Ingeniería',
                'attached_file' => 'services/diseno_plantas.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Montaje de estructuras',
                'description' => 'Montaje y armado de estructuras metálicas.',
                'status' => 'Construcción',
                'attached_file' => 'services/montaje_estructuras.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Control eléctrico',
                'description' => 'Instalación y configuración de tableros eléctricos.',
                'status' => 'Ingeniería',
                'attached_file' => 'services/control_electrico.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Instrumentación',
                'description' => 'Calibración e instalación de instrumentos de medición.',
                'status' => 'Ingeniería',
                'attached_file' => 'services/instrumentacion.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Pailería industrial',
                'description' => 'Fabricación de tanques, ductos y estructuras.',
                'status' => 'Construcción',
                'attached_file' => 'services/paileria.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Automatización de procesos',
                'description' => 'Integración de PLCs y sistemas SCADA.',
                'status' => 'Ingeniería',
                'attached_file' => 'services/automatizacion.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Reparación de equipos',
                'description' => 'Reparación de maquinaria en campo.',
                'status' => 'Construcción',
                'attached_file' => 'services/reparacion_equipos.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
