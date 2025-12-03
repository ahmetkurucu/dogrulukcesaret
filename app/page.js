'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [gameCode, setGameCode] = useState('');
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [myName, setMyName] = useState('');
  const [playerInput, setPlayerInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const truthQuestions = [
    "Partnerin hakkında kimseyle paylaşmadığın en özel fantezin ne?",
    "Şu anda sana bakıyorum, içinden ne geçiyor?",
    "Daha önce uzaktan seks yaptın mı? Nasıl oldu?",
    "Beni ilk gördüğünde aklından ne geçti?",
    "En çok hangi vücut bölgemden hoşlanıyorsun?",
    "Seks yaparken en çok ne yapmamı istersin?",
    "Benimle en çok nerede sevişmek isterdin?",
    "Şu an bana dokunabilseydin ilk nereye dokunurdun?",
    "Seks sırasında hangi pozisyonu en çok merak ediyorsun?",
    "Bana oral seks yapmayı düşündün mü? Ne zaman?",
    "Benim için kendini okşadın mı? Ne zaman?",
    "En tahrik edici rüyanda bana ne yapıyordun?",
    "Seks yaparken en çok hangi sesler çıkarmak istersin?",
    "Beni ne zaman en seksi buluyorsun?",
    "Benimle ilgili en sık hangi fantezi kuruyorsun?",
    "En son beni düşünerek mastürbasyon ne zaman yaptın?",
    "Vücudumda en çok neresi seni tahrik ediyor?",
    "Seks sırasında sana ne yapılmasını en çok istiyorsun?",
    "Benimle kameralı seks yapmayı düşündün mü?",
    "Bana seni bağlamak istediğimi söylesem ne tepki verirdin?",
    "Kaç kere orgazm olduğunu hatırlıyor musun? En iyi hangisiydi?",
    "Seks oyuncakları kullanmayı dener misin benimle?",
    "En çok hangi iç çamaşırımı seviyorsun?",
    "Benim seks sırasındaki sesimi hayal ediyor musun?",
    "Bana anal seks hakkında ne düşünüyorsun?",
    "En büyük cinsel merakın ne?",
    "Benimle threesome yapmayı hayal eder misin?",
    "Seks sırasında videoya çekilmeyi kabul eder misin?",
    "En çok hangi yerime boşalmak isterdin?",
    "Seni en çok ne kadar süre tahrik edebilirim?",
    "Oral sex sırasında en çok ne yapmamı istersin?",
    "Benimle arabada seks yapmayı düşündün mü?",
    "En tahrik edici sexting mesajı ne olurdu senin için?",
    "Bana striptiz izletmek ister misin?",
    "En çok hangi vücut parçamı yalamak istersin?",
    "Seks oyunu oynamayı dener misin benimle?",
    "Kamusal alanda riskli anlar yaşamaya ne dersin?",
    "Bana rol yapma oyunları oynamayı teklif etsem ne dersin?",
    "En çok hangi pozisyonda orgazm oluyorsun?",
    "Seks sırasında bana ne söylemeni isterim?",
    "Telefonla seks yapmayı dener misin?",
    "Bana en çılgın önerim ne olabilir?",
    "Benimle duşta seks yapmayı hayal ediyor musun?",
    "En son benim için nasıl bir fantezi kurdun?",
    "Vücuduma dokunurken en çok nereyi keşfetmek istersin?",
    "Seks sırasında dikkatimi en çok ne çeker?",
    "Benimle sabaha kadar seviş yapmayı hayal eder misin?",
    "En tahrik edici şey ne olabilir benim için?",
    "Benimle yağmur altında öpüşmeyi hayal ediyor musun?",
    "Sana striptiz yapsam nasıl hissederdin?",
    "Beni yağla masaj etmeyi düşündün mü? Nereyi?",
    "Benimle tatilde otel odasında kalsak ne yapardık?",
    "Benim inleme sesim seni ne kadar tahrik ediyor?",
    "Şu anda benim kıyafetlerimi çıkarmak için sabırsızlanıyor musun?"
  ];

  const dareQuestions = [
    "Bana şu anda çıplak üst bedeninin fotoğrafını çek ve gönder",
    "Video çek: Kendini okşarken, 30 saniye",
    "Bana sesli mesaj gönder - en tahrik edici inleme sesini çıkar",
    "İç çamaşırınla fotoğraf çek ve gönder",
    "Bana dirty talk yap - sesli mesaj, 1 dakika",
    "Duşta fotoğraf çek (buğulu cam arkasında) ve gönder",
    "Video çek: Dudaklarını yala, çok seksi olsun",
    "Bana fantezini anlat - sesli mesaj, detaylı",
    "Vücuduna buz sür ve videoyu gönder",
    "Bana en seksi dansını çek - video, 30 saniye",
    "Yatakta çıplak pozisyon ver (kapalı yerler örtülü) - fotoğraf",
    "Bana mastürbasyon sesleri gönder - sesli mesaj",
    "Vücuduna çikolata/bal sür ve fotoğrafını gönder",
    "Seksi iç çamaşırınla ayna selfie çek",
    "Bana öpücük sesi gönder - çok ateşli olsun",
    "Video çek: Kendine dokunurken, 20 saniye (kapalı)",
    "Banyoda havlu ile fotoğraf - çok seksi",
    "Bana şu anki hislerini anlat - sesli, çok açık",
    "Kalçanı göster - fotoğraf veya kısa video",
    "Bana için striptiz yap - video kaydet",
    "Yatakta uzanmış halini çek - seksi poz",
    "Bana dilini göster - seksi şekilde, fotoğraf",
    "Vücuduna krema sür - video çek",
    "Bana en tahrik edici kelimeyi tekrarla - 10 kez, sesli",
    "Göğüslerini göster (kapalı ama şekil belli) - fotoğraf",
    "Video: Kendini öperken (dudak, boyun)",
    "Bana seks sırasındaki seslerini gönder - sesli mesaj",
    "Sadece çorapla fotoğraf çek",
    "Bana pantolonsuz fotoğraf gönder (iç çamaşırıyla)",
    "Video: Yatakta yuvarlanırken - seksi",
    "Bana vücudunun en seksi yerini göster - fotoğraf",
    "Sesli mesaj: Orgazm taklidi yap - gerçekçi",
    "Aynadaki yansımalarını çek - seksi poz",
    "Bana şu an ne yapmak istediğini anlat - sesli, çok açık",
    "Video: Saçını topla, boynunu göster - seksi",
    "Bacaklarını göster - fotoğraf, seksi açı",
    "Bana için dans et - video, 1 dakika",
    "Vücuduna su dök - video çek",
    "Bana en seksi bakışını gönder - fotoğraf veya video",
    "Video: Dudaklarını ısır - yavaş ve seksi",
    "Kendine sarıl - fotoğraf, sanki ben sarılıyormuşum gibi",
    "Bana kalçanı salla - video, 15 saniye",
    "Yastığı öp - video, sanki benmişim gibi",
    "Bana vücudunun her yerini öpücük sesleri ile anlat - sesli",
    "Video: Gözlerinle flört et - 20 saniye",
    "Bana en tahrik edici pozunu göster - fotoğraf",
    "Yatak çarşafında yuvarlan - video, seksi",
    "Bana parmak ısır - video, tahrik edici",
    "Sesli: Benim adımı söyle, inleyerek",
    "Video: Vücudunu yavaşça göster (kapalı yerler hariç) - 30 saniye"
  ];

  useEffect(() => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGameCode(code);
  }, []);

  useEffect(() => {
    if (!gameCode) return;

    const interval = setInterval(() => {
      loadGameState();
      loadMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, [gameCode]);

  const loadGameState = async () => {
    try {
      const response = await fetch(`/api/game?gameCode=${gameCode}`);
      const data = await response.json();
      
      if (data.gameState) {
        if (JSON.stringify(data.gameState.players) !== JSON.stringify(players)) {
          setPlayers(data.gameState.players || []);
          setCurrentPlayerIndex(data.gameState.currentPlayerIndex || 0);
        }
      }
    } catch (error) {
      console.error('Oyun durumu yükleme hatası:', error);
    }
  };

  const saveGameState = async () => {
    try {
      await fetch('/api/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameCode,
          players,
          currentPlayerIndex
        })
      });
    } catch (error) {
      console.error('Oyun durumu kaydetme hatası:', error);
    }
  };

  const loadMessages = async () => {
    try {
      const response = await fetch(`/api/messages?gameCode=${gameCode}`);
      const data = await response.json();
      if (data.messages) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Mesajları yükleme hatası:', error);
    }
  };

  const addPlayer = async () => {
    const name = playerInput.trim();
    if (name && !players.includes(name)) {
      const newPlayers = [...players, name];
      setPlayers(newPlayers);
      if (!myName) setMyName(name);
      setPlayerInput('');
      
      // Sunucuya kaydet
      await fetch('/api/game', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameCode,
          players: newPlayers,
          currentPlayerIndex
        })
      });
      
      showStatusMessage(`${name} oyuna katıldı! 💕`);
    }
  };

  const selectChoice = (isTruth) => {
    if (players.length === 0) return;
    
    const questions = isTruth ? truthQuestions : dareQuestions;
    const question = questions[Math.floor(Math.random() * questions.length)];
    
    setCurrentQuestion(question);
    setQuestionType(isTruth ? 'truth' : 'dare');
    setShowResult(true);
    
    showStatusMessage(`${players[currentPlayerIndex]} ${isTruth ? 'Doğruluk' : 'Cesaret'} seçti! ${isTruth ? '💙' : '❤️'}`);
  };

  const nextPlayer = async () => {
    const newIndex = (currentPlayerIndex + 1) % players.length;
    setCurrentPlayerIndex(newIndex);
    setShowResult(false);
    
    await fetch('/api/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        gameCode,
        players,
        currentPlayerIndex: newIndex
      })
    });
    
    showStatusMessage(`Sıra ${players[newIndex]}'da! ⭐`);
  };

  const sendMessage = async () => {
    const text = messageInput.trim();
    if (text && myName) {
      try {
        await fetch('/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gameCode,
            sender: myName,
            text
          })
        });
        setMessageInput('');
        loadMessages();
      } catch (error) {
        console.error('Mesaj gönderme hatası:', error);
      }
    }
  };

  const showStatusMessage = (message) => {
    setStatusMessage(message);
    setShowStatus(true);
    setTimeout(() => setShowStatus(false), 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>💕 Doğruluk mu Cesaret mi? 💕</h1>
        <p>Uzak Mesafe Özel Versiyonu (+18)</p>
      </div>

      <div className={styles.gameCode}>
        <h3>🎮 Oyun Kodu</h3>
        <input type="text" value={gameCode} readOnly className={styles.codeInput} />
      </div>

      {showStatus && (
        <div className={styles.status}>
          {statusMessage}
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.playersSection}>
          <h3>👥 Oyuncular</h3>
          <div className={styles.playerForm}>
            <input
              type="text"
              value={playerInput}
              onChange={(e) => setPlayerInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
              placeholder="İsminizi girin..."
              className={styles.input}
            />
            <button onClick={addPlayer} className={styles.addBtn}>
              Ekle
            </button>
          </div>

          <div className={styles.playersList}>
            {players.map((player, index) => (
              <div
                key={index}
                className={`${styles.playerTag} ${index === currentPlayerIndex ? styles.current : ''}`}
              >
                {index === currentPlayerIndex ? '⭐ ' : ''}{player}
              </div>
            ))}
          </div>

          {!showResult ? (
            <div className={styles.choiceButtons}>
              <button
                className={`${styles.choiceBtn} ${styles.truthBtn}`}
                onClick={() => selectChoice(true)}
                disabled={players.length === 0}
              >
                <span className={styles.emoji}>💙</span>
                DOĞRULUK
              </button>
              <button
                className={`${styles.choiceBtn} ${styles.dareBtn}`}
                onClick={() => selectChoice(false)}
                disabled={players.length === 0}
              >
                <span className={styles.emoji}>❤️</span>
                CESARET
              </button>
            </div>
          ) : (
            <div className={styles.resultSection}>
              <div className={`${styles.resultTitle} ${styles[questionType]}`}>
                {questionType === 'truth' ? '💙 DOĞRULUK' : '❤️ CESARET'}
              </div>
              <div className={styles.questionBox}>
                <div className={styles.questionText}>{currentQuestion}</div>
              </div>
              <button onClick={nextPlayer} className={styles.nextBtn}>
                Sonraki Oyuncu ➡️
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.chatTitle}>💬 Sohbet</h3>
        <div className={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${msg.sender === myName ? styles.sent : styles.received}`}
            >
              <div className={styles.messageSender}>{msg.sender}</div>
              <div className={styles.messageText}>{msg.text}</div>
            </div>
          ))}
        </div>
        <div className={styles.chatInput}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Mesajınızı yazın..."
            className={styles.input}
          />
          <button onClick={sendMessage} className={styles.sendBtn}>
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
}
