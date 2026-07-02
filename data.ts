export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  cover: string;
  bio: string;
  verified: boolean;
  followers: number;
  following: number;
  level: number;
  online: boolean;
}

export interface Post {
  id: string;
  userId: string;
  text: string;
  image?: string;
  type: 'text' | 'photo' | 'video' | 'reel' | 'poll' | 'music';
  likes: number;
  comments: number;
  shares: number;
  time: string;
  hashtags: string[];
  pollOptions?: { label: string; votes: number }[];
  musicTitle?: string;
}

export interface Story {
  id: string;
  userId: string;
  image: string;
  time: string;
}

export interface Chat {
  id: string;
  userId?: string;
  group?: { name: string; members: number; avatar: string };
  lastMessage: string;
  time: string;
  unread: number;
}

export interface Message {
  id: string;
  chatId: string;
  fromMe: boolean;
  text: string;
  time: string;
}

export interface Game {
  id: string;
  name: string;
  icon: string;
  color: string;
  players: string;
  category: string;
  kind: 'quiz' | 'memory' | 'reaction' | 'tictactoe' | 'sim';
  hot?: boolean;
}

export interface NotificationItem {
  id: string;
  type: 'like' | 'comment' | 'friend' | 'game' | 'reward' | 'tournament';
  userId?: string;
  text: string;
  time: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  seller: string;
  location: string;
}

export const users: User[] = [
  { id: 'u1', name: 'Ava Sterling', handle: '@ava_plays', avatar: 'https://i.pravatar.cc/150?img=47', cover: 'https://picsum.photos/seed/cov1/800/300', bio: 'Pro gamer 🎮 | Streamer | Coffee addict ☕', verified: true, followers: 12800, following: 342, level: 42, online: true },
  { id: 'u2', name: 'Marcus Chen', handle: '@marcusgg', avatar: 'https://i.pravatar.cc/150?img=12', cover: 'https://picsum.photos/seed/cov2/800/300', bio: 'Chess master ♟️ | Building things', verified: true, followers: 8900, following: 190, level: 38, online: true },
  { id: 'u3', name: 'Zara Malik', handle: '@zara_zone', avatar: 'https://i.pravatar.cc/150?img=32', cover: 'https://picsum.photos/seed/cov3/800/300', bio: 'Music 🎵 + Games = Life', verified: false, followers: 4300, following: 512, level: 25, online: false },
  { id: 'u4', name: 'Leo Novak', handle: '@leonovak', avatar: 'https://i.pravatar.cc/150?img=68', cover: 'https://picsum.photos/seed/cov4/800/300', bio: 'Racing champ 🏎️ | Speed is everything', verified: false, followers: 2100, following: 87, level: 31, online: true },
  { id: 'u5', name: 'Mia Torres', handle: '@mia_wins', avatar: 'https://i.pravatar.cc/150?img=44', cover: 'https://picsum.photos/seed/cov5/800/300', bio: 'Quiz queen 👑 | 12x tournament winner', verified: true, followers: 25600, following: 128, level: 55, online: true },
  { id: 'u6', name: 'Kai Anderson', handle: '@kai_br', avatar: 'https://i.pravatar.cc/150?img=59', cover: 'https://picsum.photos/seed/cov6/800/300', bio: 'Battle Royale specialist 🔫', verified: false, followers: 7800, following: 233, level: 47, online: false },
  { id: 'u7', name: 'Nina Park', handle: '@ninap', avatar: 'https://i.pravatar.cc/150?img=25', cover: 'https://picsum.photos/seed/cov7/800/300', bio: 'Streamer | Ludo legend 🎲', verified: false, followers: 3400, following: 402, level: 29, online: true },
  { id: 'u8', name: 'Omar Farouk', handle: '@omarf', avatar: 'https://i.pravatar.cc/150?img=15', cover: 'https://picsum.photos/seed/cov8/800/300', bio: 'Cricket fanatic 🏏', verified: false, followers: 1900, following: 156, level: 18, online: false },
];

export const me: User = {
  id: 'me', name: 'You', handle: '@you', avatar: 'https://i.pravatar.cc/150?img=8', cover: 'https://picsum.photos/seed/mycover/800/300',
  bio: 'Play. Connect. Win. 🏆', verified: true, followers: 1250, following: 340, level: 1, online: true,
};

export const getUser = (id: string): User => (id === 'me' ? me : users.find((u) => u.id === id) || users[0]);

export const posts: Post[] = [
  { id: 'p1', userId: 'u1', text: 'Just hit Diamond rank in Battle Royale! 🔥 Who wants to squad up tonight? Drop a comment 👇', image: 'https://picsum.photos/seed/game1/600/400', type: 'photo', likes: 1243, comments: 89, shares: 34, time: '12m', hashtags: ['#BattleRoyale', '#Gaming'] },
  { id: 'p2', userId: 'u5', text: 'New quiz tournament this weekend — 50,000 coin prize pool! 🧠💰 Registration link in bio.', type: 'text', likes: 876, comments: 156, shares: 92, time: '45m', hashtags: ['#QuizMaster', '#Tournament'] },
  { id: 'p3', userId: 'u4', text: 'POV: You take the final corner at 240 km/h 🏎️💨 Full race replay on my profile.', image: 'https://picsum.photos/seed/race2/600/400', type: 'reel', likes: 3421, comments: 234, shares: 189, time: '1h', hashtags: ['#CarRacing', '#Reels'] },
  { id: 'p4', userId: 'u2', text: 'Checkmate in 4 moves. Can you find it? ♟️ First correct answer gets 500 coins from me.', image: 'https://picsum.photos/seed/chess1/600/400', type: 'photo', likes: 654, comments: 312, shares: 45, time: '2h', hashtags: ['#Chess', '#Puzzle'] },
  { id: 'p5', userId: 'u3', text: 'My new gaming lofi mix is live 🎵 Perfect background for your ranked grind.', type: 'music', musicTitle: 'Neon Nights — Lofi Gaming Mix Vol. 3', likes: 432, comments: 28, shares: 67, time: '3h', hashtags: ['#Music', '#Lofi'] },
  { id: 'p6', userId: 'u6', text: 'Which game should I stream tonight? Vote below! 🗳️', type: 'poll', pollOptions: [{ label: 'Battle Royale', votes: 342 }, { label: 'Ghost Horror', votes: 218 }, { label: 'Car Racing', votes: 154 }], likes: 289, comments: 41, shares: 12, time: '5h', hashtags: ['#Poll', '#Streaming'] },
  { id: 'p7', userId: 'u7', text: 'Ludo night with the squad was EPIC 🎲 Rolled three sixes in a row to win. Clip below!', image: 'https://picsum.photos/seed/ludo1/600/400', type: 'video', likes: 521, comments: 63, shares: 22, time: '7h', hashtags: ['#Ludo', '#Friends'] },
  { id: 'p8', userId: 'u8', text: 'Hit 6 sixes in an over in Cricket Clash 🏏🔥 Am I the next big thing or what?', image: 'https://picsum.photos/seed/cricket1/600/400', type: 'photo', likes: 198, comments: 27, shares: 8, time: '9h', hashtags: ['#Cricket', '#SixerKing'] },
  { id: 'p9', userId: 'u1', text: 'Ghost Horror at 3am with headphones on. I have made a terrible mistake 👻😱', image: 'https://picsum.photos/seed/ghost1/600/400', type: 'reel', likes: 2876, comments: 445, shares: 301, time: '12h', hashtags: ['#GhostHorror', '#Scary'] },
];

export const stories: Story[] = [
  { id: 's1', userId: 'u1', image: 'https://picsum.photos/seed/st1/400/700', time: '2h' },
  { id: 's2', userId: 'u5', image: 'https://picsum.photos/seed/st2/400/700', time: '3h' },
  { id: 's3', userId: 'u2', image: 'https://picsum.photos/seed/st3/400/700', time: '5h' },
  { id: 's4', userId: 'u7', image: 'https://picsum.photos/seed/st4/400/700', time: '8h' },
  { id: 's5', userId: 'u4', image: 'https://picsum.photos/seed/st5/400/700', time: '11h' },
  { id: 's6', userId: 'u3', image: 'https://picsum.photos/seed/st6/400/700', time: '15h' },
];

export const chats: Chat[] = [
  { id: 'c1', userId: 'u1', lastMessage: 'Squad up tonight? 🎮', time: '2m', unread: 2 },
  { id: 'c2', group: { name: 'Ludo Legends 🎲', members: 8, avatar: 'https://picsum.photos/seed/grp1/150/150' }, lastMessage: 'Nina: game starts at 9pm!', time: '18m', unread: 5 },
  { id: 'c3', userId: 'u2', lastMessage: 'That chess puzzle was brutal 😅', time: '1h', unread: 0 },
  { id: 'c4', userId: 'u5', lastMessage: 'You: gg, rematch tomorrow', time: '3h', unread: 0 },
  { id: 'c5', group: { name: 'Tournament Squad 🏆', members: 12, avatar: 'https://picsum.photos/seed/grp2/150/150' }, lastMessage: 'Kai: bracket is out, check it', time: '5h', unread: 1 },
  { id: 'c6', userId: 'u4', lastMessage: 'Race replay was insane 🔥', time: '1d', unread: 0 },
  { id: 'c7', userId: 'u3', lastMessage: 'Sent you the new mix 🎵', time: '2d', unread: 0 },
];

export const initialMessages: Record<string, Message[]> = {
  c1: [
    { id: 'm1', chatId: 'c1', fromMe: false, text: 'Yo! You online?', time: '9:12 PM' },
    { id: 'm2', chatId: 'c1', fromMe: true, text: 'Just got on. What are we playing?', time: '9:14 PM' },
    { id: 'm3', chatId: 'c1', fromMe: false, text: 'Battle Royale duos. I need my rank back 😤', time: '9:15 PM' },
    { id: 'm4', chatId: 'c1', fromMe: false, text: 'Squad up tonight? 🎮', time: '9:16 PM' },
  ],
  c2: [
    { id: 'm5', chatId: 'c2', fromMe: false, text: 'Nina: Who is in for Ludo night?', time: '8:00 PM' },
    { id: 'm6', chatId: 'c2', fromMe: true, text: 'Count me in! 🎲', time: '8:05 PM' },
    { id: 'm7', chatId: 'c2', fromMe: false, text: 'Nina: game starts at 9pm!', time: '8:10 PM' },
  ],
  c3: [
    { id: 'm8', chatId: 'c3', fromMe: true, text: 'Found the mate in 4! Qh6+ then Rg8#', time: '7:30 PM' },
    { id: 'm9', chatId: 'c3', fromMe: false, text: 'That chess puzzle was brutal 😅', time: '7:45 PM' },
  ],
};

export const autoReplies = [
  'Haha nice one 😄', 'For real! Let me hop on now.', 'GG! You were on fire 🔥',
  'One sec, finishing a match', 'Send the invite, I am ready 🎮', 'No way 😂😂', 'Bet. See you in the lobby!',
];

export const games: Game[] = [
  { id: 'g1', name: 'Ludo Royale', icon: 'dice', color: '#F59E0B', players: '2.4M', category: 'Board', kind: 'sim', hot: true },
  { id: 'g2', name: 'Prison Escape', icon: 'walk', color: '#64748B', players: '890K', category: 'Adventure', kind: 'sim' },
  { id: 'g3', name: 'Ghost Horror', icon: 'skull', color: '#7C3AED', players: '1.1M', category: 'Horror', kind: 'sim', hot: true },
  { id: 'g4', name: 'Car Racing', icon: 'car-sport', color: '#EF4444', players: '3.2M', category: 'Racing', kind: 'sim', hot: true },
  { id: 'g5', name: 'Bike Racing', icon: 'bicycle', color: '#F97316', players: '1.8M', category: 'Racing', kind: 'sim' },
  { id: 'g6', name: 'Cricket Clash', icon: 'baseball', color: '#22C55E', players: '2.9M', category: 'Sports', kind: 'sim' },
  { id: 'g7', name: 'Football Pro', icon: 'football', color: '#3B82F6', players: '2.1M', category: 'Sports', kind: 'sim' },
  { id: 'g8', name: 'Chess Masters', icon: 'extension-puzzle', color: '#8B5CF6', players: '760K', category: 'Board', kind: 'tictactoe' },
  { id: 'g9', name: 'Puzzle Blitz', icon: 'grid', color: '#06B6D4', players: '1.4M', category: 'Puzzle', kind: 'memory', hot: true },
  { id: 'g10', name: 'Brain Quiz', icon: 'bulb', color: '#EAB308', players: '2.2M', category: 'Trivia', kind: 'quiz', hot: true },
  { id: 'g11', name: 'UNO Blast', icon: 'albums', color: '#DC2626', players: '1.6M', category: 'Cards', kind: 'sim' },
  { id: 'g12', name: 'Card Empire', icon: 'layers', color: '#0EA5E9', players: '920K', category: 'Cards', kind: 'sim' },
  { id: 'g13', name: 'Battle Royale', icon: 'flame', color: '#F43F5E', players: '4.7M', category: 'Action', kind: 'sim', hot: true },
  { id: 'g14', name: 'Reflex Rush', icon: 'flash', color: '#10B981', players: '640K', category: 'Arcade', kind: 'reaction' },
  { id: 'g15', name: 'Sky Wars', icon: 'airplane', color: '#6366F1', players: '480K', category: 'Action', kind: 'sim' },
  { id: 'g16', name: 'Word Storm', icon: 'text', color: '#14B8A6', players: '390K', category: 'Puzzle', kind: 'sim' },
];

export interface QuizQ { q: string; options: string[]; answer: number }
export const quizQuestions: QuizQ[] = [
  { q: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Mercury'], answer: 1 },
  { q: 'How many squares are on a chessboard?', options: ['36', '49', '64', '81'], answer: 2 },
  { q: 'Which is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], answer: 3 },
  { q: 'In UNO, what does the +4 card also let you do?', options: ['Skip turn', 'Change color', 'Reverse', 'Swap hands'], answer: 1 },
  { q: 'How many players are on a cricket team?', options: ['9', '10', '11', '12'], answer: 2 },
  { q: 'What is the max score with a single dice roll in Ludo?', options: ['4', '5', '6', '7'], answer: 2 },
  { q: 'Which gas do plants absorb from the air?', options: ['Oxygen', 'Nitrogen', 'CO2', 'Helium'], answer: 2 },
  { q: 'Which piece can jump over others in chess?', options: ['Bishop', 'Knight', 'Rook', 'Queen'], answer: 1 },
  { q: 'How long does a football match last?', options: ['80 min', '90 min', '100 min', '120 min'], answer: 1 },
  { q: 'What is the capital of Japan?', options: ['Osaka', 'Kyoto', 'Tokyo', 'Nagoya'], answer: 2 },
];

export const leaderboard = [
  { userId: 'u5', xp: 128400, wins: 342 },
  { userId: 'u6', xp: 117200, wins: 301 },
  { userId: 'u1', xp: 98600, wins: 287 },
  { userId: 'u2', xp: 87300, wins: 256 },
  { userId: 'u4', xp: 76100, wins: 231 },
  { userId: 'u7', xp: 61800, wins: 198 },
  { userId: 'u3', xp: 52400, wins: 176 },
  { userId: 'u8', xp: 41200, wins: 143 },
];

export const tournaments = [
  { id: 't1', name: 'Weekly Blitz Cup', game: 'Brain Quiz', prize: '50,000', entrants: 1240, ends: '2d 4h', type: 'Weekly' },
  { id: 't2', name: 'Ludo Grand Masters', game: 'Ludo Royale', prize: '120,000', entrants: 3420, ends: '5d 12h', type: 'Weekly' },
  { id: 't3', name: 'Monthly Championship', game: 'Battle Royale', prize: '500,000', entrants: 8930, ends: '18d', type: 'Monthly' },
  { id: 't4', name: 'Speed Kings GP', game: 'Car Racing', prize: '200,000', entrants: 2210, ends: '9d', type: 'Monthly' },
];

export const notifications: NotificationItem[] = [
  { id: 'n1', type: 'like', userId: 'u1', text: 'Ava Sterling liked your post', time: '5m' },
  { id: 'n2', type: 'friend', userId: 'u4', text: 'Leo Novak sent you a friend request', time: '22m' },
  { id: 'n3', type: 'game', userId: 'u2', text: 'Marcus Chen challenged you to Chess Masters', time: '1h' },
  { id: 'n4', type: 'reward', text: 'Your daily reward of 200 coins is ready to claim!', time: '2h' },
  { id: 'n5', type: 'comment', userId: 'u5', text: 'Mia Torres commented: "Insane play! 🔥"', time: '3h' },
  { id: 'n6', type: 'tournament', text: 'Weekly Blitz Cup starts in 2 days — you are registered', time: '5h' },
  { id: 'n7', type: 'like', userId: 'u7', text: 'Nina Park and 24 others liked your reel', time: '8h' },
  { id: 'n8', type: 'game', userId: 'u6', text: 'Kai Anderson invited you to a Battle Royale squad', time: '12h' },
  { id: 'n9', type: 'friend', userId: 'u3', text: 'Zara Malik accepted your friend request', time: '1d' },
];

export const products: Product[] = [
  { id: 'pr1', title: 'Pro Gaming Headset RGB', price: '4,999 coins', image: 'https://picsum.photos/seed/mk1/400/400', seller: 'Ava Sterling', location: 'Ships worldwide' },
  { id: 'pr2', title: 'Mechanical Keyboard 60%', price: '7,500 coins', image: 'https://picsum.photos/seed/mk2/400/400', seller: 'Marcus Chen', location: 'Local pickup' },
  { id: 'pr3', title: 'Limited Zing Zone Hoodie', price: '3,200 coins', image: 'https://picsum.photos/seed/mk3/400/400', seller: 'Zing Store', location: 'Official' },
  { id: 'pr4', title: 'Controller Skin Pack', price: '899 coins', image: 'https://picsum.photos/seed/mk4/400/400', seller: 'Leo Novak', location: 'Digital' },
  { id: 'pr5', title: 'Gaming Chair Ergonomic', price: '15,000 coins', image: 'https://picsum.photos/seed/mk5/400/400', seller: 'Mia Torres', location: 'Local pickup' },
  { id: 'pr6', title: 'Avatar Frame — Neon Set', price: '450 coins', image: 'https://picsum.photos/seed/mk6/400/400', seller: 'Zing Store', location: 'Digital' },
];

export const groupsData = [
  { id: 'gr1', name: 'Ludo Legends India', members: '124K', image: 'https://picsum.photos/seed/gg1/400/200', joined: true },
  { id: 'gr2', name: 'Chess Grandmasters Hub', members: '89K', image: 'https://picsum.photos/seed/gg2/400/200', joined: false },
  { id: 'gr3', name: 'Battle Royale Squads', members: '256K', image: 'https://picsum.photos/seed/gg3/400/200', joined: true },
  { id: 'gr4', name: 'Retro Gamers Club', members: '45K', image: 'https://picsum.photos/seed/gg4/400/200', joined: false },
];

export const pagesData = [
  { id: 'pg1', name: 'Zing Zone Esports', followers: '1.2M', image: 'https://picsum.photos/seed/pg1/400/200', verified: true },
  { id: 'pg2', name: 'Daily Gaming News', followers: '890K', image: 'https://picsum.photos/seed/pg2/400/200', verified: true },
  { id: 'pg3', name: 'Speedrun Central', followers: '340K', image: 'https://picsum.photos/seed/pg3/400/200', verified: false },
];

export const eventsData = [
  { id: 'ev1', name: 'Zing Zone Summer Championship', date: 'Sat, Jul 12 · 6:00 PM', going: 4200, image: 'https://picsum.photos/seed/ev1/400/200' },
  { id: 'ev2', name: 'Ludo Night Live Meetup', date: 'Fri, Jul 18 · 9:00 PM', going: 890, image: 'https://picsum.photos/seed/ev2/400/200' },
  { id: 'ev3', name: 'Chess Blitz Marathon', date: 'Sun, Jul 27 · 3:00 PM', going: 1450, image: 'https://picsum.photos/seed/ev3/400/200' },
];

export const liveStreams = [
  { id: 'ls1', userId: 'u1', title: 'Ranked grind to Master! 🔥', game: 'Battle Royale', viewers: 12400, thumb: 'https://picsum.photos/seed/live1/600/340' },
  { id: 'ls2', userId: 'u5', title: 'Quiz practice w/ chat', game: 'Brain Quiz', viewers: 4300, thumb: 'https://picsum.photos/seed/live2/600/340' },
  { id: 'ls3', userId: 'u4', title: 'Night city races 🏎️', game: 'Car Racing', viewers: 8900, thumb: 'https://picsum.photos/seed/live3/600/340' },
  { id: 'ls4', userId: 'u7', title: 'Ludo with subscribers 🎲', game: 'Ludo Royale', viewers: 2100, thumb: 'https://picsum.photos/seed/live4/600/340' },
];

export const reportedItems = [
  { id: 'r1', user: 'spam_bot_2291', reason: 'Spam links in comments', reports: 34, severity: 'High' },
  { id: 'r2', user: 'toxic_player99', reason: 'Harassment in game chat', reports: 18, severity: 'High' },
  { id: 'r3', user: 'fake_giveaway', reason: 'Scam / fake coin giveaway', reports: 52, severity: 'Critical' },
  { id: 'r4', user: 'annoying_ads', reason: 'Repeated promotional posts', reports: 9, severity: 'Medium' },
];

export const achievements = [
  { id: 'a1', name: 'First Blood', desc: 'Win your first game', icon: 'trophy', done: true },
  { id: 'a2', name: 'Social Butterfly', desc: 'Add 10 friends', icon: 'people', done: true },
  { id: 'a3', name: 'Quiz Whiz', desc: 'Score 8+ in Brain Quiz', icon: 'bulb', done: false },
  { id: 'a4', name: 'Streak Master', desc: '7-day login streak', icon: 'flame', done: false },
  { id: 'a5', name: 'Coin Collector', desc: 'Earn 10,000 coins', icon: 'server', done: false },
  { id: 'a6', name: 'Rising Star', desc: 'Reach level 10', icon: 'star', done: false },
];
