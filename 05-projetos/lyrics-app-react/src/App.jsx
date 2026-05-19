import { useState } from "react";

export default function App() {
  const [musicName, setMusicName] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [musicInfo, setMusicInfo] = useState({ track: "", artist: "" });

  const buscarLetra = async () => {
    if (!musicName.trim()) {
      setError("Por favor, digite o nome de uma música!");
      return;
    }

    setLoading(true);
    setError("");
    setLyrics("");
    setMusicInfo({ track: "", artist: "" });

    try {
      const response = await fetch(
        `https://lrclib.net/api/search?q=${encodeURIComponent(musicName)}`,
      );
      const data = await response.json();

      if (data.length === 0) {
        setError("Nenhuma música encontrada.");
        setLoading(false);
        return;
      }

      const primeiraMusica = data[0];
      setLyrics(primeiraMusica.plainLyrics || "Letra não disponível.");
      setMusicInfo({
        track: primeiraMusica.trackName,
        artist: primeiraMusica.artistName,
      });

      setMusicName("");
    } catch (error) {
      setError("Erro ao buscar letra. Verifique sua conexão.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyLyrics = async () => {
    if (!lyrics) return;

    try {
      await navigator.clipboard.writeText(lyrics);
      alert("Letra copiada para a área de transferência!");
    } catch (err) {
      alert("Erro ao copiar letra.");
    }
  };

  const renderResult = () => {
    if (loading) {
      return (
        <div className="flex justify-center py-4">
          <p className="text-gray-500 animate-pulse">Buscando letra...</p>
        </div>
      );
    }

    if (error) {
      return <p className="font-medium text-center text-red-500">{error}</p>;
    }

    if (lyrics) {
      return (
        <div className="pt-6 border-t">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {musicInfo.track}
            </h2>
            <p className="text-sm font-medium tracking-wide uppercase text-emerald-600">
              {musicInfo.artist}
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg bg-gray-50">
            <div className="flex justify-end mb-4">
              <button
                onClick={copyLyrics}
                className="px-6 py-1 font-semibold text-white transition-colors bg-gray-500 shadow-md hover:bg-gray-700 rounded-xl active:scale-95"
              >
                Copy
              </button>
            </div>
            <pre className="font-sans leading-relaxed text-gray-700 whitespace-pre-wrap">
              {lyrics}
            </pre>
          </div>
        </div>
      );
    }

    return (
      <div className="italic text-center text-gray-400">
        A letra aparecerá aqui após a busca.
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
      <section className="w-full max-w-2xl p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            className="flex-1 px-4 py-3 transition-all border border-gray-300 outline-none rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            value={musicName}
            onChange={(e) => setMusicName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && buscarLetra()}
            placeholder="Ex: Bohemian Rhapsody"
          />
          <button
            onClick={buscarLetra}
            disabled={loading}
            className="px-6 py-3 font-semibold text-white transition-colors shadow-md bg-emerald-500 hover:bg-emerald-700 rounded-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>

        <div id="result" className="mt-8 transition-all">
          {renderResult()}
        </div>
      </section>
    </main>
  );
}
