// Global translations object
const translations = {
    // Navigation and common elements
    vi: {
        // Menu items
        home: 'Trang chủ',
        news: 'Tin tức',
        schedule: 'Lịch thi đấu',
        language: '',
        
        // Common UI elements
        newsHeading: 'Tin tức bóng đá mới nhất',
        readMore: 'Đọc tiếp',
        commentSection: 'Bình luận',
        writeComment: 'Viết bình luận của bạn...',
        sendComment: 'Gửi',
        quickLinks: 'Liên kết nhanh',
        contact: 'Liên hệ',
        copyright: 'Tất cả quyền được bảo lưu.',

        // Footer
        footerTagline: 'Tin tức bóng đá hàng đầu Việt Nam',
        
        // Article page specific
        matchLineup: 'Đội hình dự kiến',
        tactics: 'Phân tích chiến thuật',
        history: 'Lịch sử đối đầu',
        prediction: 'Dự đoán kết quả',
        broadcast: 'Thông tin phát sóng',
        
        // Weather widget
        selectCity: 'Chọn thành phố:',
        wind: 'Gió',
        humidity: 'Độ ẩm',
        clouds: 'Mây',
        loading: 'Đang tải...',
        
        // Calendar widget
        calendarTitle: 'Tháng',
        months: [
            'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
        ],
        weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        previousMonth: 'Tháng trước',
        nextMonth: 'Tháng sau'
    },
    
    en: {
        // Menu items
        home: 'Home',
        news: 'News',
        schedule: 'Match Schedule',
        language: '',
        // Common UI elements
        newsHeading: 'Latest Football News',
        readMore: 'Read more',
        commentSection: 'Comments',
        writeComment: 'Write your comment...',
        sendComment: 'Send',
        backToTop: 'Back to top',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        copyright: 'All rights reserved.',

        // Footer
        footerTagline: 'Leading football news in Vietnam',
        
        // Article page specific
        matchLineup: 'Expected lineup',
        tactics: 'Tactical analysis',
        history: 'Head-to-head history',
        prediction: 'Match prediction',
        broadcast: 'Broadcast information',
        
        // Weather widget
        selectCity: 'Select city:',
        wind: 'Wind',
        humidity: 'Humidity',
        clouds: 'Clouds',
        loading: 'Loading...',
        
        // Calendar widget
        calendarTitle: 'Month',
        months: [
            'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        previousMonth: 'Previous month',
        nextMonth: 'Next month'
    },

    // Article translations
    articles: {
        // Article 1
        article1: {
            vi: {
                title: 'Trận đấu nổi bật: Việt Nam vs Thái Lan',
                meta: {
                    date: '15/06/2025',
                    author: 'Nguyễn Văn A'
                },
                content: [
                    'Đội tuyển Việt Nam sẽ đối đầu với Thái Lan trong trận cầu được mong đợi nhất vòng loại World Cup 2026 khu vực châu Á. Trận đấu diễn ra vào 19h30 tối nay tại sân vận động Mỹ Đình, Hà Nội.',
                    'HLV Park Hang-seo đã công bố đội hình ra sân với nhiều bất ngờ. Tiền đạo Nguyễn Công Phượng sẽ đá chính sau thời gian dài ngồi dự bị. Hàng thủ được củng cố với sự trở lại của Đỗ Duy Mạnh.',
                    'Đội tuyển Việt Nam nhiều khả năng sẽ áp dụng lối chơi phòng ngự phản công quen thuộc. Với tốc độ của Văn Toàn và kỹ thuật của Quang Hải, đội tuyển có thể tạo ra những đợt tấn công nguy hiểm.',
                    'Trong khi đó, đội tuyển Thái Lan với HLV Mano Polking sẽ chơi tấn công áp đặt với sơ đồ 4-3-3. Chanathip Songkrasin vẫn là ngôi sao được kỳ vọng sẽ tỏa sáng bên phía đội khách.',
                    'Trong 10 trận gần nhất, Việt Nam thắng 3, hòa 4 và thua 3 trước Thái Lan. Trận đấu gần nhất giữa hai đội kết thúc với tỷ số hòa 0-0 tại AFF Cup 2022.',
                    'Với lợi thế sân nhà và phong độ ổn định gần đây, đội tuyển Việt Nam được đánh giá cao hơn trong trận đấu này. Nhiều chuyên gia dự đoán một chiến thắng sát nút 1-0 hoặc 2-1 cho đội chủ nhà.',
                    'Trận đấu sẽ được phát sóng trực tiếp trên các kênh VTV6, VTV5 và ứng dụng VTV Go từ 19h00, với 30 phút bình luận trước trận đấu.'
                ]
            },
            en: {
                title: 'Featured Match: Vietnam vs Thailand',
                meta: {
                    date: '06/15/2025',
                    author: 'Nguyen Van A'
                },
                content: [
                    'Vietnam national team will face Thailand in the most anticipated match of the World Cup 2026 qualification round in the Asian region. The match will take place tonight at 7:30 PM at My Dinh Stadium, Hanoi.',
                    'Coach Park Hang-seo has announced the starting lineup with several surprises. Forward Nguyen Cong Phuong will start after spending a long time on the bench. The defense has been strengthened with the return of Do Duy Manh.',
                    'Vietnam is likely to employ their familiar counter-attacking style. With Van Toan\'s speed and Quang Hai\'s technical skills, the team can create dangerous attacks.',
                    'Meanwhile, Thailand under coach Mano Polking will play an aggressive attacking style with a 4-3-3 formation. Chanathip Songkrasin remains the star player expected to shine for the visiting team.',
                    'In the last 10 matches, Vietnam has won 3, drawn 4, and lost 3 against Thailand. The most recent match between the two teams ended in a 0-0 draw at the AFF Cup 2022.',
                    'With home advantage and recent stable performance, Vietnam is rated higher in this match. Many experts predict a narrow victory of 1-0 or 2-1 for the home team.',
                    'The match will be broadcast live on VTV6, VTV5 channels and the VTV Go app from 7:00 PM, with 30 minutes of pre-match commentary.'
                ]
            }
        },
        
        // Article 2
        article2: {
            vi: {
                title: 'Champions League 2025: Cuộc đua nghẹt thở vào vòng bán kết',
                meta: {
                    date: '10/03/2025',
                    author: 'Trần Văn B'
                },
                content: [
                    'Mùa giải Champions League 2024-2025 đang bước vào giai đoạn gay cấn nhất với các trận tứ kết. Manchester City, Real Madrid, Bayern Munich và Inter Milan đang là những ứng cử viên hàng đầu cho chức vô địch năm nay. Các cặp đấu tứ kết Manchester City vs Paris Saint-Germain, Real Madrid vs Bayern Munich, Inter Milan vs Arsenal, Barcelona vs Borussia Dortmund. Phân tích cơ hội'
                ]
            },
            en: {
                title: 'Champions League 2025: The Final Countdown',
                meta: {
                    date: '03/10/2025',
                    author: 'Tran Van B'
                },
                content: [  
                    'The Champions League 2024-2025 is entering the most exciting stage with the quarter-finals. Manchester City, Real Madrid, Bayern Munich, and Inter Milan are the top contenders for the title this year. The quarter-final matches are Manchester City vs Paris Saint-Germain, Real Madrid vs Bayern Munich, Inter Milan vs Arsenal, and Barcelona vs Borussia Dortmund. Analysis of the odds'
                ]
            },
            en: {
                title: 'Quang Hai, the best midfielder in Vietnam',
                meta: {
                    date: '03/10/2025',
                    author: 'Tran Van B'
                },
                content: [  
                    'Midfielder Nguyen Quang Hai has been voted Player of the Month for May after an impressive series of matches in V-League 2025. This is the second consecutive time the 1997-born player has received this honor.',
                    'In May, Quang Hai scored 3 goals and provided 4 assists, playing a crucial role in helping his club secure 4 consecutive victories. The midfielder\'s excellent performance has been highly appreciated by experts and fans.',
                    'According to statistics, Quang Hai created 15 scoring opportunities in 5 matches, with a passing accuracy of up to 87%. He is also the player who covered the most distance in the team with an average of 11.2 km per match.',
                    '"I am very happy and honored to receive this award. This is the result of continuous training efforts and support from teammates and coaching staff. I will continue to strive to maintain my form and help the team achieve its goals this season," Quang Hai shared after receiving the award.',
                    'The team\'s coach also praised his player: "Quang Hai is a talented and professional player. He not only has good technique but also excellent tactical thinking. I believe Hai will go even further in his career."',
                    'With his current form, Quang Hai is expected to be an important factor in Vietnam\'s lineup at upcoming international tournaments. The 1997-born midfielder is also attracting interest from several foreign clubs.',
                    'In a recent interview, Quang Hai said he is focusing on upcoming matches and has no specific plans for the distant future. "My current goal is to win the V-League championship with the team and prepare as best as possible for international matches with the Vietnam national team," Hai said.'
                ]
            }
        },
        
        // Article 3
        article3: {
            vi: {
                // title: 'V-League 2025: Những thay đổi quan trọng',
                meta: {
                    date: '05/06/2025',
                    author: 'Lê Thị C'
                },
                content: [
                    'V-League 2025 sẽ có nhiều thay đổi quan trọng về thể thức thi đấu và quy định chuyển nhượng. Những điều chỉnh này nhằm nâng cao chất lượng giải đấu và phát triển bóng đá Việt Nam.',
                    'Theo thông báo từ VPF (Công ty Cổ phần Bóng đá Chuyên nghiệp Việt Nam), V-League 2025 sẽ áp dụng thể thức thi đấu mới với hai giai đoạn. Giai đoạn 1 sẽ thi đấu vòng tròn một lượt để xác định thứ hạng. Sau đó, giải sẽ chia thành hai nhóm: nhóm tranh chức vô địch (6 đội đứng đầu) và nhóm trụ hạng (8 đội còn lại).',
                    'Ở giai đoạn 2, các đội trong mỗi nhóm sẽ thi đấu vòng tròn hai lượt để xác định thứ hạng cuối cùng. Điểm số và hiệu số bàn thắng từ giai đoạn 1 sẽ được giữ nguyên khi bước vào giai đoạn 2.',
                    'V-League 2025 cũng sẽ có những thay đổi trong quy định chuyển nhượng. Mỗi đội được đăng ký tối đa 3 cầu thủ nước ngoài và 1 cầu thủ gốc Việt. Đặc biệt, các câu lạc bộ có thể thực hiện chuyển nhượng giữa mùa giải trong khoảng thởi gian từ ngày 1/6 đến 30/6/2025.',
                    'Ngoài ra, các đội bóng cũng được phép đăng ký bổ sung cầu thủ U21 không giới hạn, miễn là những cầu thủ này đã tham gia giải U21 quốc gia. Điều này nhằm khuyến khích các câu lạc bộ đầu tư và phát triển cầu thủ trẻ.',
                    'V-League 2025 dự kiến sẽ khởi tranh vào tháng 2 và kết thúc vào tháng 9. Với thể thức mới, mỗi đội sẽ phải thi đấu ít nhất 24 trận trong mùa giải. Điều này đòi hỏi các câu lạc bộ phải có chiến lược hợp lý về lực lượng và thể lực cho cầu thủ.',
                    'Lịch thi đấu cũng được sắp xếp để tránh trùng với các đợt tập trung của đội tuyển quốc gia. Các trận đấu sẽ diễn ra chủ yếu vào cuối tuần, với một số trận đấu được tổ chức vào các ngày trong tuần.',
                    'Một trong những vấn đề được quan tâm trong V-League 2025 là chất lượng trọng tài. VFF (Liên đoàn Bóng đá Việt Nam) đã có kế hoạch mời trọng tài nước ngoài điều khiển các trận đấu quan trọng. Đồng thời, công nghệ VAR (Video Assistant Referee) cũng sẽ được thử nghiệm tại một số trận đấu.'
                ]
            },
            en: {
                title: 'V-League 2025: Important Changes',
                meta: {
                    date: '06/05/2025',
                    author: 'Le Thi C'
                },
                content: [
                    'V-League 2025 will have many important changes in competition format and transfer regulations. These adjustments aim to improve the quality of the tournament and develop Vietnamese football.',
                    'According to the announcement from VPF (Vietnam Professional Football Joint Stock Company), V-League 2025 will apply a new competition format with two phases. Phase 1 will be a single round-robin to determine rankings. Then, the tournament will be divided into two groups: championship group (top 6 teams) and relegation group (remaining 8 teams).',
                    'In phase 2, teams in each group will play a double round-robin to determine the final rankings. Points and goal difference from phase 1 will be maintained when entering phase 2.',
                    'V-League 2025 will also have changes in transfer regulations. Each team can register a maximum of 3 foreign players and 1 Vietnamese-origin player. In particular, clubs can make mid-season transfers during the period from June 1 to June 30, 2025.',
                    'In addition, teams are also allowed to register unlimited U21 players, as long as these players have participated in the national U21 tournament. This aims to encourage clubs to invest in and develop young players.',
                    'V-League 2025 is expected to start in February and end in September. With the new format, each team will have to play at least 24 matches in the season. This requires clubs to have a reasonable strategy regarding manpower and physical fitness for players.',
                    'The match schedule is also arranged to avoid overlapping with national team gatherings. Matches will take place mainly on weekends, with some matches organized on weekdays.',
                    'One of the concerns in V-League 2025 is the quality of referees. VFF (Vietnam Football Federation) has plans to invite foreign referees to officiate important matches. At the same time, VAR (Video Assistant Referee) technology will also be tested in some matches.'
                ]
            }
        },
        
        // Article 4
        article4: {
            vi: {
                title: 'Đội tuyển Việt Nam sẵn sàng cho vòng loại World Cup 2026',
                meta: {
                    date: '15/01/2025',
                    author: 'Nguyễn Văn A'
                },
                content: [
                    'Đội tuyển Việt Nam đã hoàn tất công tác chuẩn bị cho chiến dịch vòng loại World Cup 2026. Với sự dẫn dắt của HLV mới và dàn cầu thủ trẻ tài năng, đội tuyển đặt mục tiêu tạo nên bất ngờ tại giải đấu này.',
                    'HLV trưởng đã công bố danh sách 23 cầu thủ cho các trận đấu sắp tới. Đáng chú ý là sự trở lại của nhiều ngôi sao đang thi đấu ở nước ngoài, cùng với đó là sự xuất hiện của những tài năng trẻ đầy triển vọng.',
                    'Đội tuyển sẽ có 3 trận đấu quan trọng trong tháng 2/2025: Việt Nam vs Malaysia (20/02), Indonesia vs Việt Nam (24/02), và Việt Nam vs Thái Lan (28/02).',
                    'Các chuyên gia bóng đá trong khu vực đánh giá cao cơ hội của đội tuyển Việt Nam tại vòng loại World Cup 2026. Với sự phát triển vượt bậc của bóng đá Việt Nam trong những năm gần đây, cùng với việc FIFA mở rộng số đội tham dự vòng chung kết, cơ hội để Việt Nam lần đầu tiên góp mặt tại World Cup là hoàn toàn có thể.'
                ]
            },
            en: {
                title: 'Vietnam Team Ready for World Cup 2026 Qualifiers',
                meta: {
                    date: '01/15/2025',
                    author: 'Nguyen Van A'
                },
                content: [
                    'The Vietnam national team has completed preparations for the World Cup 2026 qualification campaign. With the guidance of a new coach and a talented young squad, the team aims to create surprises in this tournament.',
                    'The head coach has announced a list of 23 players for the upcoming matches. Notable is the return of many stars currently playing abroad, along with the emergence of promising young talents.',
                    'The team will have 3 important matches in February 2025: Vietnam vs Malaysia (02/20), Indonesia vs Vietnam (02/24), and Vietnam vs Thailand (02/28).',
                    'Football experts in the region highly rate Vietnam\'s chances in the World Cup 2026 qualifiers. With the remarkable development of Vietnamese football in recent years, along with FIFA\'s expansion of the number of teams participating in the finals, the opportunity for Vietnam to make its first appearance at the World Cup is entirely possible.'
                ]
            }
        },
        
        // Article 5
        article5: {
            vi: {
                title: 'Champions League 2025: Cuộc đua nghẹt thở vào vòng bán kết',
                meta: {
                    date: '10/04/2025',
                    author: 'Trần Văn B'
                },
                content: [
                    'Mùa giải Champions League 2024-2025 đang bước vào giai đoạn gay cấn nhất với các trận tứ kết. Manchester City, Real Madrid, Bayern Munich và Inter Milan đang là những ứng cử viên hàng đầu cho chức vô địch năm nay.',
                    'Các cặp đấu tứ kết: Manchester City vs Paris Saint-Germain, Real Madrid vs Bayern Munich, Inter Milan vs Arsenal, và Barcelona vs Borussia Dortmund.',
                    'Manchester City đang được đánh giá cao nhất với phong độ ấn tượng và dàn cầu thủ đồng đều. Tuy nhiên, Real Madrid với kinh nghiệm dày dặn tại đấu trường châu Âu cũng không phải là đối thủ dễ bị đánh bại.',
                    'Thống kê đáng chú ý: Manchester City có 8 trận thắng liên tiếp tại Champions League, Erling Haaland dẫn đầu danh sách ghi bàn với 12 bàn thắng, Real Madrid đã 15 năm liên tiếp vào tứ kết, và Bayern Munich có tỷ lệ kiểm soát bóng trung bình 65%.'
                ]
            },
            en: {
                title: 'Champions League 2025: Thrilling Race to the Semi-finals',
                meta: {
                    date: '04/10/2025',
                    author: 'Tran Van B'
                },
                content: [
                    'The 2024-2025 Champions League season is entering its most intense phase with the quarter-finals. Manchester City, Real Madrid, Bayern Munich, and Inter Milan are the leading contenders for this year\'s championship.',
                    'Quarter-final matchups: Manchester City vs Paris Saint-Germain, Real Madrid vs Bayern Munich, Inter Milan vs Arsenal, and Barcelona vs Borussia Dortmund.',
                    'Manchester City is rated highest with impressive form and a balanced squad. However, Real Madrid with their extensive experience in European competitions is not an easy opponent to defeat.',
                    'Notable statistics: Manchester City has 8 consecutive wins in the Champions League, Erling Haaland leads the scoring list with 12 goals, Real Madrid has reached the quarter-finals for 15 consecutive years, and Bayern Munich has an average ball possession rate of 65%.'
                ]
            }
        },
        
        // Article 6
        article6: {
            vi: {
                title: 'Premier League 2024-2025: Cuộc đua vô địch căng thẳng',
                meta: {
                    date: '20/03/2025',
                    author: 'Lê Thị C'
                },
                content: [
                    'Khi mùa giải Premier League 2024-2025 bước vào giai đoạn cuối, cuộc đua vô địch đang diễn ra vô cùng gay cấn với sự cạnh tranh quyết liệt giữa các đội đầu bảng.',
                    'Top 4 đội dẫn đầu: Arsenal (72 điểm, 30 trận), Manchester City (71 điểm, 29 trận), Liverpool (70 điểm, 30 trận), và Manchester United (65 điểm, 30 trận).',
                    'Arsenal đang nắm lợi thế với 1 điểm nhiều hơn Manchester City, tuy nhiên đội đương kim vô địch vẫn còn 1 trận chưa đấu. Liverpool cũng đang có phong độ rất cao với chuỗi 8 trận thắng liên tiếp.',
                    'Các trận đấu quan trọng sắp tới: Arsenal vs Liverpool (05/04), Manchester City vs Manchester United (12/04), Liverpool vs Manchester City (19/04), và Arsenal vs Manchester United (26/04).'
                ]
            },
            en: {
                title: 'Premier League 2024-2025: Tense Championship Race',
                meta: {
                    date: '03/20/2025',
                    author: 'Le Thi C'
                },
                content: [
                    'As the Premier League 2024-2025 season enters its final stage, the championship race is extremely intense with fierce competition among the top teams.',
                    'Top 4 leading teams: Arsenal (72 points, 30 matches), Manchester City (71 points, 29 matches), Liverpool (70 points, 30 matches), and Manchester United (65 points, 30 matches).',
                    'Arsenal has the advantage with 1 point more than Manchester City, however, the defending champions still have 1 match in hand. Liverpool is also in great form with a streak of 8 consecutive wins.',
                    'Upcoming important matches: Arsenal vs Liverpool (04/05), Manchester City vs Manchester United (04/12), Liverpool vs Manchester City (04/19), and Arsenal vs Manchester United (04/26).'
                ]
            }
        }
    },
    
    // News cards on main page
    newsCards: {
        card1: {
            vi: {
                title: 'Trận đấu nổi bật: Việt Nam vs Thái Lan',
                date: '15/04/2025',
                author: 'Nguyễn Văn A',
                excerpt: 'Đội tuyển Việt Nam sẽ đối đầu với Thái Lan trong trận cầu được mong đợi nhất vòng loại World Cup 2026 khu vực châu Á.'
            },
            en: {
                title: 'Featured Match: Vietnam vs Thailand',
                date: '04/15/2025',
                author: 'Nguyen Van A',
                excerpt: 'Vietnam national team will face Thailand in the most anticipated match of the World Cup 2026 qualification round in the Asian region.'
            }
        },
        card2: {
            vi: {
                title: 'Champions League 2025: Cuộc đua nghẹt thở vào vòng bán kết',
                date: '10/05/2025',
                author: 'Trần Văn B',
                excerpt: 'Mùa giải Champions League 2024-2025 đang bước vào giai đoạn gay cấn nhất với các trận tứ kết. Manchester City, Real Madrid, Bayern Munich và Inter Milan đang là những ứng cử viên hàng đầu cho chức vô địch năm nay.'
            },
            en: {
                title: 'Champions League 2025: Breathtaking race to the semi-finals',
                date: '05/10/2025',
                author: 'Tran Van B',
                excerpt: 'The 2024-2025 Champions League season is entering its most exciting phase with the quarter-finals. Manchester City, Real Madrid, Bayern Munich and Inter Milan are the leading candidates for this year championship.'
            }
        },
        card3: {
            vi: {
                title: 'Premier League 2024-2025: Cuộc đua vô địch căng thẳng',
                date: '05/06/2025',
                author: 'Lê Thị C',
                excerpt: 'Khi mùa giải Premier League 2024-2025 bước vào giai đoạn cuối, cuộc đua vô địch đang diễn ra vô cùng gay cấn với sự cạnh tranh quyết liệt giữa các đội đầu bảng.'
            },
            en: {
                title: 'Premier League 2024-2025: Tense championship race',
                date: '06/05/2025',
                author: 'Le Thi C',
                excerpt: 'As the 2024-2025 Premier League season enters its final stages, the championship race is getting intense with fierce competition between the top teams.'
            }
        },
        card4: {
            vi: {
                title: 'La Liga 2024-2025: Real Madrid tiến gần đến ngôi vương',
                date: '01/05/2025',
                author: 'Phạm Thu D',
                excerpt: 'Real Madrid đang cho thấy phong độ ấn tượng tại La Liga 2024-2025, với việc dẫn đầu bảng xếp hạng và khoảng cách an toàn trước các đối thủ cạnh tranh.'
            },
            en: {
                title: 'La Liga 2024-2025: Real Madrid close to the throne',
                date: '05/01/2025',
                author: 'Pham Thu D',
                excerpt: 'Real Madrid are showing impressive form in La Liga 2024-2025, leading the rankings and keeping a safe distance from their competitors.'
            }
        },
        card5: {
            vi: {
                title: 'Serie A 2024-2025: Inter Milan thống trị',
                date: '01/06/2025',
                author: 'Trần Thị G',
                excerpt: 'Inter Milan đang thể hiện phong độ vô cùng ấn tượng tại Serie A 2024-2025, với việc dẫn đầu bảng xếp hạng một cách thuyết phục và đang trên đường hướng tới chức vô địch.'
            },
            en: {
                title: 'Serie A 2024-2025: Inter Milan dominate',
                date: '06/01/2025',
                author: 'Tran Thi G',
                excerpt: 'Inter Milan are showing extremely impressive form in Serie A 2024-2025, with a convincing lead in the rankings and on the way to the championship.'
            }
        },
        card6: {
            vi: {
                title: 'Bundesliga 2024-2025: Cuộc chiến nảy lửa giữa Bayern Munich và Bayer Leverkusen',
                date: '10/06/2025',
                author: 'Lê Văn H',
                excerpt: 'Bundesliga 2024-2025 đang chứng kiến một trong những mùa giải hấp dẫn nhất lịch sử với cuộc đua song mã giữa Bayern Munich và Bayer Leverkusen.'
            },
            en: {
                title: 'Bundesliga 2024-2025: Fierce battle between Bayern Munich and Bayer Leverkusen',
                date: '06/10/2025',
                author: 'Le Van H',
                excerpt: 'Bundesliga 2024-2025 đang chứng kiến một trong những mùa giải hấp dẫn nhất lịch sử với cuộc đua song mã giữa Bayern Munich và Bayer Leverkusen.'
            }
        }
    }
};

// Get the current language from localStorage, default to Vietnamese
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'vi';
}

// Set the language in localStorage
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

// Translate a specific key
function translateKey(key, lang) {
    const langObj = translations[lang] || translations.vi;
    return langObj[key] || key;
}

// Function to check if the current page is an article page
function isArticlePage() {
    return window.location.pathname.includes('/news/article');
}

// Function to get article ID from the URL
function getArticleId() {
    const path = window.location.pathname;
    const match = path.match(/article(\d+)/);
    return match ? match[0] : null;
}

// Apply translations to main news page
function translateNewsPage(lang) {
    // Update menu items
    const menuItems = document.querySelectorAll('#main-nav > ul > li > a:not(.dropdown-toggle):not(#light-mode-btn):not(#dark-mode-btn)');
    if (menuItems.length >= 5) {
        menuItems[0].textContent = translations[lang].home;
        menuItems[1].textContent = translations[lang].news;
        menuItems[2].textContent = translations[lang].schedule;
        menuItems[3].textContent = translations[lang].comments;
        menuItems[4].textContent = translations[lang].login;
    }
    
    // Update language dropdown text
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.innerHTML = `<i class="fas fa-globe"></i> ${translations[lang].language} <i class="fas fa-caret-down"></i>`;
    }
    
    // Update news heading
    const newsHeading = document.querySelector('.news-section h2');
    if (newsHeading) {
        newsHeading.textContent = translations[lang].newsHeading;
    }
    
    // Update read more links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        // Keep the icon but replace the text
        const icon = link.querySelector('i');
        link.textContent = translations[lang].readMore + ' ';
        if (icon) link.appendChild(icon);
    });
    
    // Update news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        const cardNumber = `card${index + 1}`;
        if (translations.newsCards[cardNumber]) {
            const cardData = translations.newsCards[cardNumber][lang];
            
            // Update title, date, author, excerpt
            const title = card.querySelector('h3');
            if (title && cardData.title) {
                title.textContent = cardData.title;
            }
            
            const meta = card.querySelectorAll('.news-meta span');
            if (meta.length >= 2) {
                if (cardData.date) {
                    meta[0].innerHTML = `<i class="far fa-calendar-alt"></i> ${cardData.date}`;
                }
                if (cardData.author) {
                    meta[1].innerHTML = `<i class="far fa-user"></i> ${cardData.author}`;
                }
            }
            
            const excerpt = card.querySelector('p');
            if (excerpt && cardData.excerpt) {
                excerpt.textContent = cardData.excerpt;
            }
        }
    });
    
    // Update footer
    updateFooter(lang);
}

// Apply translations to article page
function translateArticlePage(lang) {
    const articleId = getArticleId();
    
    if (articleId && translations.articles[articleId]) {
        const articleData = translations.articles[articleId][lang];
        
        // Update title
        const title = document.querySelector('.article-title');
        if (title && articleData.title) {
            title.textContent = articleData.title;
            // Also update page title
            document.title = articleData.title + ' - MindX News';
        }
        
        // Update meta info
        const meta = document.querySelectorAll('.article-meta span');
        if (meta.length >= 2 && articleData.meta) {
            if (articleData.meta.date) {
                meta[0].innerHTML = `<i class="far fa-calendar-alt"></i> ${articleData.meta.date}`;
            }
            if (articleData.meta.author) {
                meta[1].innerHTML = `<i class="far fa-user"></i> ${articleData.meta.author}`;
            }
        }
        
        // Update content
        if (articleData.content) {
            const contentElements = document.querySelectorAll('.article-content > p');
            articleData.content.forEach((paragraph, index) => {
                if (contentElements[index]) {
                    contentElements[index].textContent = paragraph;
                }
            });
            
            // Update subheadings
            const subheadings = document.querySelectorAll('.article-content > h3');
            if (subheadings.length >= 5) {
                subheadings[0].textContent = translations[lang].matchLineup;
                subheadings[1].textContent = translations[lang].tactics;
                subheadings[2].textContent = translations[lang].history;
                subheadings[3].textContent = translations[lang].prediction;
                subheadings[4].textContent = translations[lang].broadcast;
            }
        }
    }
    
    // Update navigation
    const menuItems = document.querySelectorAll('#main-nav > ul > li > a');
    if (menuItems.length >= 5) {
        menuItems[0].textContent = translations[lang].home;
        menuItems[1].textContent = translations[lang].news;
        menuItems[2].textContent = translations[lang].schedule;
        menuItems[3].textContent = translations[lang].comments;
        menuItems[4].textContent = translations[lang].login;
    }
    
    // Update comment section
    const commentHeading = document.querySelector('.comments-section > h3');
    if (commentHeading) {
        commentHeading.textContent = translations[lang].commentSection;
    }
    
    const commentPlaceholder = document.querySelector('#comment-input');
    if (commentPlaceholder) {
        commentPlaceholder.setAttribute('placeholder', translations[lang].writeComment);
    }
    
    const submitBtn = document.querySelector('#submit-comment');
    if (submitBtn) {
        submitBtn.textContent = translations[lang].sendComment;
    }
    
    // Update back to top button
    const backToTopBtn = document.querySelector('#back-to-top');
    if (backToTopBtn) {
        backToTopBtn.setAttribute('title', translations[lang].backToTop);
    }
    
    // Update footer
    updateFooter(lang);
}

// Common footer translation
function updateFooter(lang) {
    // Footer tagline
    const footerTagline = document.querySelector('.footer-logo p');
    if (footerTagline) {
        footerTagline.textContent = translations[lang].footerTagline;
    }
    
    // Quick links heading
    const quickLinksHeading = document.querySelector('.footer-links h3');
    if (quickLinksHeading) {
        quickLinksHeading.textContent = translations[lang].quickLinks;
    }
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-links li a');
    if (footerLinks.length >= 4) {
        footerLinks[0].textContent = translations[lang].home;
        footerLinks[1].textContent = translations[lang].news;
        footerLinks[2].textContent = translations[lang].schedule;
        footerLinks[3].textContent = translations[lang].comments;
    }
    
    // Contact heading
    const contactHeading = document.querySelector('.footer-contact h3');
    if (contactHeading) {
        contactHeading.textContent = translations[lang].contact;
    }
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        copyright.innerHTML = `&copy; ${new Date().getFullYear()} MindX News. ${translations[lang].copyright}`;
    }
}

// Main function to apply translations to the current page
function applyTranslations(lang) {
    if (isArticlePage()) {
        translateArticlePage(lang);
    } else {
        translateNewsPage(lang);
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    
    // Apply initial translations
    applyTranslations(currentLang);
    
    // Update active language option
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
});
