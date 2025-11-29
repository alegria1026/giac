<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('certifications')->insert([
            [
                'user_id' => 1,
                'name' => 'ISO 9001:2015',
                'attached_file' => 'certifications/iso_9001.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'ISO 14001:2015',
                'attached_file' => 'certifications/iso_14001.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'OHSAS 18001',
                'attached_file' => 'certifications/ohsas_18001.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'API Spec Q1',
                'attached_file' => 'certifications/api_q1.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'ASME Sección VIII',
                'attached_file' => 'certifications/asme_viii.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Certificación en soldadura AWS',
                'attached_file' => 'certifications/aws_soldadura.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Certificación en electricidad industrial',
                'attached_file' => 'certifications/electricidad_industrial.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Certificación de seguridad laboral',
                'attached_file' => 'certifications/seguridad_laboral.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Certificación en automatización',
                'attached_file' => 'certifications/automatizacion.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Certificación en inspección de calidad',
                'attached_file' => 'certifications/inspeccion_calidad.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'name' => 'Certificación ambiental',
                'attached_file' => 'certifications/ambiental.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 2,
                'name' => 'Certificación energética',
                'attached_file' => 'certifications/energetica.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
