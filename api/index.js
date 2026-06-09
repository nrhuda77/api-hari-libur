import 'dotenv/config';
export default async function handler(req, res) {

    // Hanya menerima POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Gunakan method POST'
        });
    }

    const {
        username,
        password,
        tahun
    } = req.body || {};

    // Validasi parameter
    if (!username || !password || !tahun) {
        return res.status(400).json({
            success: false,
            message: 'username, password dan tahun wajib diisi'
        });
    }

    // Validasi login
    if (
        username !== process.env.API_USERNAME ||
        password !== process.env.API_PASSWORD
    ) {
        return res.status(401).json({
            success: false,
            message: 'Username atau password salah'
        });
    }

    try {

        // Ambil file tahun secara dinamis
        const module = await import(`../data/${tahun}.js`);

        const data = module.default;

        return res.status(200).json({
            success: true,
            tahun: Number(tahun),
            total: data.length,
            data
        });

    } catch (error) {

        return res.status(404).json({
            success: false,
            message: `Data hari libur tahun ${tahun} tidak ditemukan`
        });

    }
}