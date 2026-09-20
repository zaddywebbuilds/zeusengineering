/**
 * ============================================================
 * VIETNAMESE, PAGE PROSE
 * ============================================================
 *
 * Keyed by the English source sentence. Every `t("...")` in the app looks up
 * this map; a miss falls back to the English, so a gap degrades to a readable
 * page rather than to a raw key.
 *
 * `npm run audit:i18n` extracts every `t()` literal in the source and fails
 * the build if one is missing here, so the fallback is a safety net rather
 * than an excuse.
 *
 * REVIEW STATUS: not yet reviewed by a native speaker. ZEUS should correct
 * this file before it goes to a customer. It is deliberately one flat file so
 * that review is a single read rather than a hunt through 70 components.
 *
 * CONVENTIONS USED HERE
 *   - Technical product terms stay in English, which is normal in Vietnamese
 *     technical writing: SSMDC, Bitcoin, AI, GPU, HBM, PFLOPS, ASIC, DC-DC,
 *     rack, container, inverter is rendered "bộ nghịch lưu".
 *   - "compute" as a noun is consistently "điện toán".
 *   - "hyperscale" is "siêu lớn" when used as an adjective for a facility.
 *   - Figures, units and currency are never translated or converted. They are
 *     rendered from the shared data layer, not retyped here.
 *   - Headline strings keep the same number of "\n" line breaks as English,
 *     because the layout reserves a fixed number of masked lines.
 */
export const viStrings: Record<string, string> = {
  // ---------------------------------------------------------------
  // Homepage, hero
  // ---------------------------------------------------------------
  "ZEUS Engineering / Vietnam": "ZEUS Engineering / Việt Nam",
  "ZEUS Engineering introduction": "Giới thiệu ZEUS Engineering",
  "Engineering the\ninfrastructure\nbehind compute.":
    "Kiến tạo hạ tầng\nphía sau\nnền điện toán.",
  "Modular infrastructure for Bitcoin, AI and high-density computing, engineered in Vietnam.":
    "Hạ tầng mô-đun cho Bitcoin, AI và điện toán mật độ cao, thiết kế và chế tạo tại Việt Nam.",
  "Explore infrastructure": "Khám phá hạ tầng",
  "Investor relations": "Dành cho nhà đầu tư",
  "Scroll to explore": "Cuộn để khám phá",
  "Power plant": "Trạm điện",
  "ZEUS Engineering switchgear cabinets on a compute site at dusk, carrying the ZEUS Engineering wordmark and the line Powering the next generation of compute":
    "Tủ đóng cắt của ZEUS Engineering tại một cơ sở điện toán lúc hoàng hôn, mang logo ZEUS Engineering và dòng chữ Powering the next generation of compute",

  // ---------------------------------------------------------------
  // Homepage, positioning
  // ---------------------------------------------------------------
  Positioning: "Định vị",
  "From energy\nto compute.": "Từ năng lượng\nđến điện toán.",
  "From energy to compute": "Từ năng lượng đến điện toán",
  "While much of the industry concentrates resources into ever-larger hyperscale facilities, ZEUS has deliberately taken a different approach: highly efficient, modular, decentralised infrastructure built close to available energy.":
    "Trong khi phần lớn ngành dồn nguồn lực vào những trung tâm dữ liệu siêu lớn ngày càng đồ sộ, ZEUS chủ động chọn hướng khác: hạ tầng mô-đun, phân tán, hiệu suất cao, đặt sát nơi có sẵn nguồn điện.",
  "Standardised modular designs can be deployed in months rather than years. They contain the impact of an individual system failure. And they let both small and large investors participate in digital infrastructure without the barriers of large-scale development.":
    "Các thiết kế mô-đun tiêu chuẩn hoá có thể triển khai trong vài tháng thay vì nhiều năm. Chúng khoanh vùng được thiệt hại khi một hệ thống đơn lẻ gặp sự cố. Và chúng mở đường cho cả nhà đầu tư nhỏ lẫn lớn tham gia vào hạ tầng số mà không vấp phải rào cản của các dự án quy mô lớn.",
  "Solar, containers, compute": "Điện mặt trời, container, điện toán",
  "Aerial view of a compute site: a solar array, containerised units, external cooling plant and a hall carrying the ZEUS Engineering wordmark":
    "Ảnh chụp từ trên cao một cơ sở điện toán: dàn pin mặt trời, các khối container, hệ thống làm mát bên ngoài và một nhà xưởng mang logo ZEUS Engineering",
  "Generation, storage and compute on one pad, the shape every SSMDC node takes, sited next to the energy rather than the other way round.":
    "Phát điện, lưu trữ và điện toán trên cùng một mặt bằng, đúng hình hài của mỗi cụm SSMDC, đặt cạnh nguồn năng lượng thay vì ngược lại.",
  "Read the full vision": "Đọc toàn bộ tầm nhìn",
  Energy: "Năng lượng",
  "Grid and solar, managed as one supply.":
    "Lưới điện và điện mặt trời, quản lý như một nguồn duy nhất.",
  Infrastructure: "Hạ tầng",
  "Power, cooling, enclosure, control.":
    "Nguồn điện, làm mát, vỏ bọc, điều khiển.",
  Compute: "Điện toán",
  "Bitcoin today. AI and modular next.":
    "Hôm nay là Bitcoin. Kế tiếp là AI và mô-đun.",

  // ---------------------------------------------------------------
  // Homepage, the system
  // ---------------------------------------------------------------
  "The system": "Hệ thống",
  "Power. Cooling.\nCompute. Control.": "Điện. Làm mát.\nĐiện toán. Điều khiển.",
  "Not four services. One system, in which every stage constrains the next, and where the thing that fails first is almost never the silicon.":
    "Không phải bốn dịch vụ riêng lẻ. Đây là một hệ thống, trong đó mỗi khâu đặt ra giới hạn cho khâu kế tiếp, và thứ hỏng trước tiên gần như không bao giờ là con chip.",

  // ---------------------------------------------------------------
  // Homepage, proof and thermal
  // ---------------------------------------------------------------
  Operations: "Vận hành",
  "Built through\noperation.": "Tôi luyện\nqua vận hành.",
  "Engineering experience developed running high-density compute infrastructure in southern Vietnam, where power is finite, the air is hot and wet, and the hardware does not get to rest.":
    "Kinh nghiệm kỹ thuật tích luỹ từ việc vận hành hạ tầng điện toán mật độ cao tại miền Nam Việt Nam, nơi nguồn điện có hạn, không khí nóng ẩm, và thiết bị không có lúc nào được nghỉ.",
  "Thermal management": "Quản lý nhiệt",
  "Heat is the\nreal constraint.": "Nhiệt mới là\ngiới hạn thật sự.",
  "In a tropical climate, cooling stops being a line item and becomes the constraint everything else is arranged around. Asked how it manages heat, ZEUS describes conventional airflow engineering rather than exotic hardware.":
    "Trong khí hậu nhiệt đới, làm mát không còn là một khoản mục chi phí mà trở thành giới hạn mà mọi thứ khác phải sắp xếp xoay quanh. Khi được hỏi quản lý nhiệt thế nào, ZEUS mô tả kỹ thuật điều tiết luồng khí thông thường chứ không phải thiết bị đặc biệt.",
  "ZEUS's published description of its approach to heat. No rated operating temperature, humidity limit or uptime guarantee is claimed.":
    "Đây là mô tả ZEUS đã công bố về cách tiếp cận nhiệt. Không có tuyên bố nào về nhiệt độ vận hành định mức, giới hạn độ ẩm hay cam kết thời gian hoạt động.",
  "Described by ZEUS; not independently audited.":
    "Theo mô tả của ZEUS; chưa được kiểm toán độc lập.",
  "Cooling plant": "Hệ thống làm mát",
  "Concept visualisation of external cooling plant and containerised units at a coastal site":
    "Hình ảnh minh hoạ ý tưởng về hệ thống làm mát bên ngoài và các khối container tại một cơ sở ven biển",

  // Thermal methods, from metrics.ts
  "Airflow control systems": "Hệ thống điều tiết luồng khí",
  Fans: "Quạt",
  "Water radiators for hydro systems":
    "Két nước giải nhiệt cho hệ thống làm mát bằng chất lỏng",

  // ---------------------------------------------------------------
  // Homepage, the journey
  // ---------------------------------------------------------------
  "Where this goes": "Chặng đường phía trước",
  "From Bitcoin infrastructure to AI and modular compute":
    "Từ hạ tầng Bitcoin đến AI và điện toán mô-đun",
  "The proving ground": "Nơi thử lửa",
  "Bitcoin proved\nthe infrastructure.": "Bitcoin đã chứng minh\nhạ tầng này.",
  "Machines at full load, continuously, in a tropical climate. Power density, heat rejection, efficiency and uptime stop being architecture diagrams and become the daily operating reality.":
    "Máy chạy hết tải, liên tục, trong khí hậu nhiệt đới. Mật độ công suất, tản nhiệt, hiệu suất và độ sẵn sàng thôi là những sơ đồ kiến trúc và trở thành thực tế vận hành mỗi ngày.",
  "Concept visualisation of a data hall aisle lined with racked mining hardware":
    "Hình ảnh minh hoạ ý tưởng về một lối đi trong phòng máy với các giá đỡ thiết bị khai thác",
  "The opportunity": "Cơ hội",
  "AI expands\nthe opportunity.": "AI mở rộng\ncơ hội đó.",
  "AI accelerators arrive with the same physical demands ZEUS already engineers around, more power per rack, more heat to move, less tolerance for downtime. The workload changes. The infrastructure problem does not.":
    "Các bộ tăng tốc AI đặt ra đúng những đòi hỏi vật lý mà ZEUS vốn đã thiết kế để đáp ứng: nhiều điện hơn trên mỗi tủ rack, nhiều nhiệt phải tản hơn, ít dung sai hơn cho thời gian ngừng máy. Tải công việc thay đổi. Bài toán hạ tầng thì không.",
  "AI compute and analytics imagery":
    "Hình ảnh về điện toán AI và phân tích dữ liệu",
  "The destination": "Đích đến",
  "Modular compute\nis the destination.": "Điện toán mô-đun\nlà đích đến.",
  "Rather than concentrating everything into one hyperscale site, ZEUS builds standardised units that can be manufactured, transported and commissioned close to available energy, and repeated.":
    "Thay vì dồn tất cả vào một cơ sở siêu lớn, ZEUS chế tạo những khối tiêu chuẩn có thể sản xuất, vận chuyển và đưa vào vận hành ngay cạnh nguồn năng lượng sẵn có, rồi lặp lại mô hình đó.",
  "Concept visualisation of a modular compute campus with solar array beside the coast":
    "Hình ảnh minh hoạ ý tưởng về một khu điện toán mô-đun với dàn pin mặt trời bên bờ biển",

  // ---------------------------------------------------------------
  // Homepage, solutions index and project
  // ---------------------------------------------------------------
  Solutions: "Giải pháp",
  "What ZEUS\nbuilds.": "ZEUS\nxây dựng gì.",
  Operating: "Đang vận hành",
  "The site where the engineering is proven: finite power, continuous load, and a climate that punishes anything under-specified.":
    "Nơi phần kỹ thuật được chứng minh: nguồn điện có hạn, tải chạy liên tục, và một khí hậu trừng phạt mọi thứ được thiết kế thiếu chuẩn.",
  "Explore project": "Tìm hiểu dự án",
  "Concept visualisation of a ZEUS site: containerised units, a solar array and a compute hall beside the coast":
    "Hình ảnh minh hoạ ý tưởng về một cơ sở ZEUS: các khối container, dàn pin mặt trời và một nhà máy điện toán bên bờ biển",

  // ---------------------------------------------------------------
  // Homepage, SSMDC explorer
  // ---------------------------------------------------------------
  "Small footprint.\nSerious compute.": "Diện tích nhỏ.\nNăng lực thật.",
  Power: "Nguồn điện",
  "80–120 kWp of on-site solar with 300–500 kWh of usable battery, carrying a 50–75 kW continuous IT load.":
    "80–120 kWp điện mặt trời tại chỗ cùng 300–500 kWh pin khả dụng, gánh phụ tải CNTT liên tục 50–75 kW.",
  "Kept DC end to end, solar to battery to distribution to compute, removing the inverter and the server-side AC-DC stage for a stated 8–15% ongoing saving.":
    "Giữ dòng một chiều từ đầu đến cuối, từ pin mặt trời qua ắc quy, qua phân phối, tới thiết bị điện toán, loại bỏ bộ nghịch lưu và khâu chuyển AC-DC phía máy chủ, tiết kiệm 8–15% theo công bố của ZEUS.",
  Cooling: "Làm mát",
  "Thermal management designed for the harshest of environments.":
    "Hệ thống quản lý nhiệt thiết kế cho những môi trường khắc nghiệt nhất.",
  "Cooling capacity is what determines whether a compact enclosure can hold high-density hardware at full load in a tropical climate.":
    "Năng lực làm mát chính là thứ quyết định một khối vỏ nhỏ gọn có thể giữ thiết bị mật độ cao chạy hết tải trong khí hậu nhiệt đới hay không.",
  "Bitcoin mining, AI compute, or a mix of both.":
    "Khai thác Bitcoin, điện toán AI, hoặc kết hợp cả hai.",
  "The enclosure is workload-agnostic: what changes between a mining deployment and an AI deployment is the hardware inside, not the infrastructure around it.":
    "Khối vỏ không phụ thuộc vào loại tải: thứ thay đổi giữa một triển khai khai thác và một triển khai AI là phần cứng bên trong, không phải hạ tầng bao quanh nó.",
  Control: "Điều khiển",
  "Full automation and remote monitoring.":
    "Tự động hoá toàn phần và giám sát từ xa.",
  "Remote operation is what makes small distributed sites viable, a unit placed near available energy cannot depend on a permanent on-site crew.":
    "Vận hành từ xa là thứ khiến các cơ sở nhỏ, phân tán trở nên khả thi: một khối đặt cạnh nguồn năng lượng không thể trông cậy vào một đội kỹ thuật túc trực thường xuyên.",

  // ---------------------------------------------------------------
  // Homepage, the comparison
  // ---------------------------------------------------------------
  "The argument": "Luận điểm",
  "Where modular\nwins.": "Mô-đun\nthắng ở đâu.",
  "Hyperscale compared with SSMDC":
    "So sánh trung tâm dữ liệu siêu lớn với SSMDC",
  "How ZEUS sees the deployment model: many small nodes rather than one large campus. This is the company's own design thesis, not an independent industry benchmark.":
    "Cách ZEUS nhìn nhận mô hình triển khai: nhiều cụm nhỏ thay vì một khu lớn duy nhất. Đây là luận điểm thiết kế của chính công ty, không phải một chuẩn so sánh độc lập của ngành.",
  "Two topologies": "Hai cấu trúc mạng",
  "Schematic. No node count is implied; ZEUS has published none for a network.":
    "Sơ đồ nguyên lý. Không hàm ý số lượng cụm; ZEUS chưa công bố con số nào cho một mạng lưới.",
  "Hyperscale compared with the ZEUS SSMDC across ten capabilities":
    "So sánh trung tâm dữ liệu siêu lớn với SSMDC của ZEUS trên mười tiêu chí",
  Capability: "Tiêu chí",
  Hyperscale: "Siêu lớn",
  "Hyperscale:": "Siêu lớn:",
  "ZEUS's comparison": "So sánh của ZEUS",
  "Only the final row describes something that exists, the 100 kWp prototype. The rest compares an operating model against a design.":
    "Chỉ dòng cuối cùng mô tả một thứ đã tồn tại, đó là nguyên mẫu 100 kWp. Phần còn lại so sánh một mô hình đang vận hành với một bản thiết kế.",
  "How the SSMDC works": "SSMDC hoạt động thế nào",
  "Node economics": "Bài toán kinh tế của một cụm",

  // ---------------------------------------------------------------
  // Homepage, investor gateway
  // ---------------------------------------------------------------
  "Build the nodes.\nScale the network.": "Dựng các cụm.\nMở rộng mạng lưới.",
  "A prototype that already runs, a node design costed to the line, and a raise sized to build two of them, presented so that what exists, what is planned and what is projected are never the same thing.":
    "Một nguyên mẫu đã chạy, một thiết kế cụm được bóc tách chi phí tới từng dòng, và một vòng huy động đủ để dựng hai cụm đầu tiên, được trình bày sao cho cái đang có, cái đang dự kiến và cái đang dự phóng không bao giờ bị lẫn làm một.",
  "Explore investor relations": "Tìm hiểu dành cho nhà đầu tư",
  "The ask": "Vòng huy động",
  "Current raise": "Vòng huy động hiện tại",
  "Fundraising target": "Mục tiêu huy động vốn",
  "18–24 month runway to live nodes":
    "Lộ trình 18–24 tháng để đưa các cụm vào vận hành",

  // ---------------------------------------------------------------
  // Page titles and meta descriptions
  //
  // These are what a Vietnamese visitor sees in a search result and in the
  // browser tab, so they are translated ahead of body prose. Company, product
  // and unit names are left exactly as published.
  // ---------------------------------------------------------------
  "Infrastructure for high-density compute": "Hạ tầng cho điện toán mật độ cao",
  "Modular infrastructure for Bitcoin, AI and high-density computing, engineered in Vietnam. Power, cooling, compute and remote control.":
    "Hạ tầng mô-đun cho Bitcoin, AI và điện toán mật độ cao, thiết kế tại Việt Nam. Nguồn điện, làm mát, điện toán và điều khiển từ xa.",

  Careers: "Tuyển dụng",
  "ZEUS Engineering is a small engineering team in southern Vietnam working on power, thermal management and high-density compute infrastructure.":
    "ZEUS Engineering là một đội ngũ kỹ thuật nhỏ tại miền Nam Việt Nam, làm việc với hệ thống điện, quản lý nhiệt và hạ tầng điện toán mật độ cao.",

  Leadership: "Ban lãnh đạo",
  "The ZEUS Engineering leadership team: Tatts Nguyen, Chris Gainer, Quynh Nguyen and Valentine Cheval.":
    "Ban lãnh đạo ZEUS Engineering: Tatts Nguyen, Chris Gainer, Quynh Nguyen và Valentine Cheval.",

  About: "Giới thiệu",
  "A private engineering company in southern Vietnam specialising in modular datacenter infrastructure, Bitcoin mining, AI and renewable energy.":
    "Một công ty kỹ thuật tư nhân tại miền Nam Việt Nam, chuyên về hạ tầng trung tâm dữ liệu mô-đun, khai thác Bitcoin, AI và năng lượng tái tạo.",

  Contact: "Liên hệ",
  "Contact ZEUS Engineering, infrastructure and engineering enquiries, hosted mining enquiries, and investor enquiries.":
    "Liên hệ ZEUS Engineering: yêu cầu về hạ tầng và kỹ thuật, dịch vụ lưu trữ máy đào, và yêu cầu từ nhà đầu tư.",

  Insights: "Góc nhìn",
  "ZEUS Engineering's published answers on mining economics, hardware, heat management and regulation in Vietnam.":
    "Những câu trả lời ZEUS Engineering đã công bố về bài toán kinh tế của khai thác, phần cứng, quản lý nhiệt và quy định pháp lý tại Việt Nam.",

  "Investor Brief": "Tóm lược cho nhà đầu tư",
  "A one-page investor brief for ZEUS Engineering, generated from the same figures the rest of this site renders. Print or save as PDF.":
    "Bản tóm lược một trang dành cho nhà đầu tư của ZEUS Engineering, dựng từ chính những con số mà phần còn lại của trang web này hiển thị. In hoặc lưu thành PDF.",

  "Node Economics": "Bài toán kinh tế của một cụm",
  "What a 400 m² class SSMDC node produces and computes: 80–120 kWp solar, 300–500 kWh battery, 50–75 kW IT load and 24–32 H100/H200 GPUs.":
    "Một cụm SSMDC quy mô 400 m² phát ra và tính toán được những gì: 80–120 kWp điện mặt trời, 300–500 kWh pin, phụ tải CNTT 50–75 kW và 24–32 GPU H100/H200.",

  "Investor Relations": "Dành cho nhà đầu tư",
  "ZEUS Engineering is raising $2.69M to build decentralised AI compute nodes in Vietnam, SSMDC. Traction, economics, roadmap and the case.":
    "ZEUS Engineering đang huy động 2,69 triệu USD để xây dựng các cụm điện toán AI phân tán tại Việt Nam theo mô hình SSMDC. Kết quả đã có, bài toán kinh tế, lộ trình và luận điểm đầu tư.",

  "Expansion Roadmap": "Lộ trình mở rộng",
  "From ZEUS Engineering's operating prototype through the first SSMDC nodes to a distributed network.":
    "Từ nguyên mẫu đang vận hành của ZEUS Engineering, qua những cụm SSMDC đầu tiên, tới một mạng lưới phân tán.",

  "The Ask": "Vòng huy động",
  "ZEUS Engineering is raising $2.69M for an 18–24 month runway to multiple live SSMDC nodes. Full use-of-funds breakdown.":
    "ZEUS Engineering đang huy động 2,69 triệu USD cho lộ trình 18–24 tháng để đưa nhiều cụm SSMDC vào vận hành. Bóc tách đầy đủ việc sử dụng vốn.",

  "Why Vietnam": "Vì sao chọn Việt Nam",
  "Why ZEUS builds in Vietnam: capex, power rates, sunlight, policy, logistics and tax, with the company's own caveats.":
    "Vì sao ZEUS xây dựng tại Việt Nam: chi phí đầu tư, giá điện, nguồn nắng, chính sách, hậu cần và thuế, kèm theo những lưu ý của chính công ty.",

  Privacy: "Chính sách bảo mật",
  "How the ZEUS Engineering website handles information. A working draft pending legal review.":
    "Cách trang web ZEUS Engineering xử lý thông tin. Đây là bản thảo đang chờ rà soát pháp lý.",

  "Error / 404": "Lỗi / 404",
  "No route\nto that page.": "Không có đường dẫn\ntới trang đó.",
  "The address does not resolve. It may have moved, or it may never have existed.":
    "Địa chỉ này không tồn tại. Có thể trang đã được chuyển đi, hoặc chưa từng tồn tại.",
  "Back to home": "Về trang chủ",
  "Or try": "Hoặc thử",

  Projects: "Dự án",
  "ZEUS Engineering's operating infrastructure. Project 001: a reported 100 kW facility on a 300 m² site in the Vung Tau / Ba Ria region, Vietnam.":
    "Hạ tầng đang vận hành của ZEUS Engineering. Dự án 001: cơ sở 100 kW theo công bố, trên khu đất 300 m² tại khu vực Vũng Tàu / Bà Rịa, Việt Nam.",
  "ZEUS Engineering's operating site in Ba Ria, Vietnam: a reported 100 kW facility on 300 m² with 20 kW peak solar.":
    "Cơ sở đang vận hành của ZEUS Engineering tại Bà Rịa, Việt Nam: theo công bố là cơ sở 100 kW trên 300 m² với 20 kW điện mặt trời đỉnh.",

  "AI Infrastructure": "Hạ tầng AI",
  "The physical requirements of high-density AI compute, and how ZEUS Engineering's operating experience in Vietnam applies to them.":
    "Những đòi hỏi vật lý của điện toán AI mật độ cao, và kinh nghiệm vận hành tại Việt Nam của ZEUS Engineering áp dụng vào đó ra sao.",

  "Bitcoin Infrastructure": "Hạ tầng Bitcoin",
  "ZEUS Engineering's Bitcoin mining infrastructure in Vietnam: ASIC deployment, power, cooling, monitoring and maintenance, run continuously.":
    "Hạ tầng khai thác Bitcoin của ZEUS Engineering tại Việt Nam: triển khai ASIC, nguồn điện, làm mát, giám sát và bảo trì, vận hành liên tục.",

  "Energy Integration": "Tích hợp năng lượng",
  "Grid supply and solar generation managed as one system, ZEUS Engineering's approach to reducing the operating cost of high-density compute in Vietnam.":
    "Nguồn lưới và điện mặt trời được quản lý như một hệ thống duy nhất, cách ZEUS Engineering giảm chi phí vận hành cho điện toán mật độ cao tại Việt Nam.",

  "Hosted Mining": "Lưu trữ máy đào",
  "ZEUS Engineering runs and maintains client-owned Bitcoin mining hardware in Vietnam: power, cooling, monitoring and maintenance for a 10% service fee.":
    "ZEUS Engineering vận hành và bảo trì thiết bị khai thác Bitcoin thuộc sở hữu của khách hàng tại Việt Nam: nguồn điện, làm mát, giám sát và bảo trì, với phí dịch vụ 10%.",

  "Modular Data Centers": "Trung tâm dữ liệu mô-đun",
  "Containerised compute infrastructure deployed in months, not years. The SSMDC: ZEUS's Small Solar Modular Data Centre for Vietnam.":
    "Hạ tầng điện toán đóng gói trong container, triển khai trong vài tháng thay vì nhiều năm. SSMDC: trung tâm dữ liệu mô-đun nhỏ chạy điện mặt trời của ZEUS cho Việt Nam.",

  "Modular data centers, AI infrastructure, Bitcoin infrastructure, hosted mining and energy integration, the five areas ZEUS Engineering builds in.":
    "Trung tâm dữ liệu mô-đun, hạ tầng AI, hạ tầng Bitcoin, lưu trữ máy đào và tích hợp năng lượng, năm lĩnh vực ZEUS Engineering xây dựng.",

  Sources: "Nguồn số liệu",
  "Every figure published on this site about ZEUS Engineering, its status, and the exact ZEUS source it came from. Including the claims we chose not to publish.":
    "Mọi con số về ZEUS Engineering được công bố trên trang này, kèm nhãn trạng thái và đúng nguồn ZEUS mà nó được lấy ra. Bao gồm cả những tuyên bố chúng tôi đã chọn không đăng.",

  "ZEUS Engineering compute infrastructure - ASIC hardware running continuously today, and the same power and thermal envelope AI accelerators demand.":
    "Hạ tầng điện toán của ZEUS Engineering: thiết bị ASIC đang chạy liên tục hôm nay, và cùng một giới hạn về điện và nhiệt mà các bộ tăng tốc AI đòi hỏi.",

  "Cooling and Thermal Management": "Làm mát và quản lý nhiệt",
  "ZEUS Engineering thermal management - airflow control, fans and water radiators for hydro systems, engineered for continuous full load in a tropical climate.":
    "Quản lý nhiệt của ZEUS Engineering: điều tiết luồng khí, quạt và két nước giải nhiệt cho hệ thống làm mát bằng chất lỏng, thiết kế để chạy hết tải liên tục trong khí hậu nhiệt đới.",

  "Monitoring and Automation": "Giám sát và tự động hoá",
  "ZEUS Engineering monitoring and automation - the telemetry and remote control layer that makes small distributed compute sites viable.":
    "Giám sát và tự động hoá của ZEUS Engineering: lớp đo lường từ xa và điều khiển từ xa giúp các cơ sở điện toán nhỏ, phân tán trở nên khả thi.",

  Technology: "Công nghệ",
  "Power, cooling, compute and control, the four pillars of ZEUS Engineering's infrastructure, and how they constrain one another.":
    "Nguồn điện, làm mát, điện toán và điều khiển, bốn trụ cột trong hạ tầng của ZEUS Engineering, và cách chúng ràng buộc lẫn nhau.",

  "Power Architecture": "Kiến trúc điện",
  "ZEUS Engineering power architecture - grid integration, solar generation, distribution and grid load balancing for high-density compute.":
    "Kiến trúc điện của ZEUS Engineering: tích hợp lưới, phát điện mặt trời, phân phối và cân bằng phụ tải lưới cho điện toán mật độ cao.",

  Vision: "Tầm nhìn",
  "Where ZEUS Engineering is going: from an operating Bitcoin prototype to distributed, solar-powered modular compute nodes built in Vietnam.":
    "Hướng đi của ZEUS Engineering: từ một nguyên mẫu Bitcoin đang vận hành tới các cụm điện toán mô-đun phân tán, chạy điện mặt trời, chế tạo tại Việt Nam.",
};
