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

  // ── Investors / SSMDC data ────────────────────────────────────────────────

  "Years of delay": "Nhiều năm trì hoãn",
  "Paperwork, permits, grid interconnection and commissioning routinely stretch 3–7 years before a hyperscale campus delivers a single FLOP.":
    "Hồ sơ, giấy phép, đấu nối lưới và nghiệm thu thường kéo dài 3–7 năm trước khi một campus hyperscale chạy được một FLOP đơn lẻ.",
  "Concentrated risk": "Rủi ro tập trung",
  "A single-site failure in power, cooling, network or regulation takes down massive capacity. Uptime is tied to one location.":
    "Sự cố tại một điểm duy nhất — về điện, làm mát, mạng hay pháp lý — có thể đánh sập toàn bộ năng lực. Thời gian hoạt động bị ràng buộc vào một địa điểm.",
  "Capital and site lock-in": "Bị khóa vốn và địa điểm",
  "Hundreds of millions locked into one geography. Land, power contracts and local politics become single points of failure.":
    "Hàng trăm triệu đô la bị khóa vào một địa lý duy nhất. Đất đai, hợp đồng điện và chính trị địa phương trở thành điểm thất bại đơn lẻ.",

  "Factory-built or rapid-deploy units. Scale by adding nodes rather than enlarging a site.":
    "Các đơn vị được chế tạo sẵn tại xưởng hoặc lắp đặt nhanh tại chỗ. Mở rộng quy mô bằng cách thêm cụm, không phải mở rộng một khu đất.",
  "Solar + battery": "Điện mặt trời + pin lưu trữ",
  "On-site generation and storage. Lower energy cost and reduced grid dependency.":
    "Phát điện và lưu trữ ngay tại chỗ. Giảm chi phí năng lượng và giảm phụ thuộc vào lưới điện.",
  "DC-DC architecture": "Kiến trúc DC một chiều",
  "Eliminate inverter and AC-DC conversion losses. 8–15% ongoing power savings.":
    "Loại bỏ tổn hao do nghịch lưu và chuyển đổi AC sang DC. Tiết kiệm điện 8–15% liên tục.",
  "Real-estate offset": "Bù đắp bằng bất động sản",
  "Acquire land as a second asset class that stabilises the compute business.":
    "Mua đất như tài sản thứ hai, giúp ổn định mảng kinh doanh điện toán.",

  "Deployment speed": "Tốc độ triển khai",
  "3–7+ years": "3–7+ năm",
  Months: "Vài tháng",
  "Capital intensity (first capacity)": "Cường độ vốn (năng lực đầu tiên)",
  "Hundreds of millions": "Hàng trăm triệu đô la",
  "Sub-$1M per node": "Dưới 1 triệu USD mỗi cụm",
  "Site / single-point risk": "Rủi ro địa điểm / điểm đơn",
  High: "Cao",
  "Low. Distributed nodes": "Thấp. Các cụm phân tán",
  "Uptime model": "Mô hình hoạt động",
  "Tied to one location": "Gắn với một địa điểm",
  "Network of nodes": "Mạng lưới các cụm",
  "On-site solar + battery": "Điện mặt trời + pin tại chỗ",
  "Rare or limited": "Hiếm hoặc hạn chế",
  "Core design": "Thiết kế cốt lõi",
  "DC-DC power efficiency": "Hiệu suất điện DC-DC",
  "Usually AC-heavy": "Thường nặng về AC",
  "8–15% ongoing savings": "Tiết kiệm 8–15% liên tục",
  "Real-estate offset model": "Mô hình bù đắp bất động sản",
  "Pure compute asset": "Tài sản thuần điện toán",
  "Land + compute dual asset": "Tài sản kép: đất + điện toán",
  "Time to first revenue": "Thời gian đến doanh thu đầu tiên",
  Years: "Nhiều năm",
  "Far shorter": "Ngắn hơn nhiều",
  "Scalability approach": "Cách tiếp cận mở rộng",
  "Big-bang / multi-year": "Một lần lớn / nhiều năm",
  "Add nodes as needed": "Thêm cụm theo nhu cầu",
  "Existing live prototype": "Nguyên mẫu đang hoạt động",
  "Not applicable": "Không áp dụng",
  "100 kWp operational": "100 kWp đang vận hành",

  "Inference, 70B-class": "Suy diễn, nhóm 70B",
  "30–100k+ tokens per second.": "30–100k+ token mỗi giây.",
  "Form factor": "Kích thước thiết bị",
  "Three to four 8-GPU servers.": "Ba đến bốn máy chủ 8 GPU.",
  "Upgrade path": "Lộ trình nâng cấp",
  "B200 when ready.": "B200 khi sẵn sàng.",
  Workloads: "Khối lượng công việc",
  "Production inference plus medium-scale training and fine-tuning.":
    "Suy diễn sản xuất cộng với đào tạo và tinh chỉnh quy mô trung.",

  "GPU & server hardware": "Phần cứng GPU và máy chủ",
  "Two nodes: 24–32 H200-class GPUs plus servers, NVLink, networking and DC-input PSUs.":
    "Hai cụm: 24–32 GPU nhóm H200 cùng máy chủ, NVLink, mạng và bộ nguồn đầu vào DC.",
  "Founders, staff & contractors": "Nhà sáng lập, nhân sự và nhà thầu",
  "Two founders plus engineers, installers, ops and legal over 18–24 months, taxes and social insurance included.":
    "Hai nhà sáng lập cùng kỹ sư, thợ lắp đặt, vận hành và pháp lý trong 18–24 tháng, bao gồm thuế và bảo hiểm xã hội.",
  "Solar, battery, power & build-out": "Điện mặt trời, pin lưu trữ, hệ thống điện và thi công",
  "80–120 kWp solar, 300–500 kWh battery, DC plant and containers or site works for two to three nodes.":
    "80–120 kWp điện mặt trời, 300–500 kWh pin, hạ tầng DC và container hoặc công trình cho hai đến ba cụm.",
  "Land options, deposits & setup": "Quyền chọn đất, đặt cọc và thủ tục thành lập",
  "Site options in the Bà Rịa region, plus permits, corporate, import clearance and legal.":
    "Quyền chọn địa điểm ở khu vực Bà Rịa, cùng giấy phép, pháp nhân doanh nghiệp, thông quan nhập khẩu và pháp lý.",
  "R&D, taxes, contingency & working capital": "Nghiên cứu phát triển, thuế, dự phòng và vốn lưu động",
  "DC-DC R&D, import duty and VAT buffer, insurance, legal and runway contingency.":
    "Nghiên cứu phát triển DC-DC, bộ đệm thuế nhập khẩu và VAT, bảo hiểm, pháp lý và dự phòng lộ trình.",

  "Power systems DNA": "Chuyên môn về hệ thống điện",
  "Electrical and electronics engineering, plus a decade of dense GPU and ASIC cluster operations for mining.":
    "Kỹ thuật điện và điện tử, cộng với một thập kỷ vận hành cluster GPU và ASIC mật độ cao cho khai thác.",
  "Military systems discipline": "Kỷ luật từ hệ thống quân sự",
  "Electrical engineering at UNSW Canberra and 20+ years of experience, with a Blackhawk and MRH-90 systems background: weight, power, thermal and reliability under constraint.":
    "Kỹ thuật điện tại UNSW Canberra và 20+ năm kinh nghiệm, với kinh nghiệm về hệ thống Blackhawk và MRH-90: khối lượng, điện, nhiệt và độ tin cậy trong điều kiện ràng buộc.",
  "Live prototype": "Nguyên mẫu đang hoạt động",
  "A 100 kWp BTC ASIC site already running in Vietnam. Real data, real lessons.":
    "Một cơ sở BTC ASIC 100 kWp đang chạy tại Việt Nam. Dữ liệu thực, bài học thực.",
  "Vertical integration": "Tích hợp dọc",
  "From solar and battery design through DC distribution to compute packaging and site acquisition.":
    "Từ thiết kế điện mặt trời và pin qua phân phối DC đến đóng gói điện toán và mua địa điểm.",

  "AI training and inference capacity sold as nodes or as a managed service. High utilisation, recurring revenue, and an energy cost structurally lower via the solar and DC-DC path.":
    "Năng lực đào tạo và suy diễn AI được bán theo cụm hoặc theo dịch vụ quản lý. Tỷ lệ sử dụng cao, doanh thu định kỳ, và chi phí năng lượng thấp hơn về cơ cấu nhờ điện mặt trời và lộ trình DC-DC.",
  "Real estate": "Bất động sản",
  "Land and buildings acquired as a core asset. Appreciating or cash-flowing property offsets engineering and operations cost, the McDonald's model applied to modular compute.":
    "Đất đai và tòa nhà được mua như tài sản cốt lõi. Bất động sản tăng giá hoặc tạo dòng tiền bù đắp chi phí kỹ thuật và vận hành, mô hình McDonald's áp dụng cho điện toán mô-đun.",

  // ── FAQ ──────────────────────────────────────────────────────────────────

  "Does it cost more in power than you make in Bitcoin?":
    "Chi phí điện có cao hơn thu nhập từ Bitcoin không?",
  "ZEUS's answer emphasises managing power use and cost through efficient equipment, wholesale power rates and renewable energy, which is the reasoning behind the 1 MW and 2 MW capacity targets and the 500 kW solar fit-out in the expansion plan.":
    "Câu trả lời của ZEUS nhấn mạnh việc quản lý mức sử dụng và chi phí điện thông qua thiết bị hiệu quả, giá điện bán sỉ và năng lượng tái tạo.",
  "Don't the machines become obsolete?": "Máy móc có trở nên lỗi thời không?",
  "ZEUS acknowledges technology obsolescence, and emphasises extracting value during the equipment's higher-return period, maintaining an upgrade plan, and considering lower-cost power for older equipment.":
    "ZEUS thừa nhận tình trạng lỗi thời công nghệ, và nhấn mạnh việc khai thác giá trị trong giai đoạn sinh lời cao của thiết bị, duy trì kế hoạch nâng cấp.",
  "Is mining illegal in Vietnam?": "Khai thác tiền điện tử có bất hợp pháp ở Việt Nam không?",
  "ZEUS states that Bitcoin mining itself is not illegal, and distinguishes it from illegal power theft.":
    "ZEUS tuyên bố rằng bản thân việc khai thác Bitcoin không phải là bất hợp pháp, và phân biệt nó với hành vi trộm cắp điện bất hợp pháp.",
  "Regulatory claim from ZEUS's deck. Independently re-verify.":
    "Tuyên bố pháp lý từ tài liệu của ZEUS. Xác minh độc lập.",
  "Is Bitcoin illegal in Vietnam?": "Bitcoin có bất hợp pháp ở Việt Nam không?",
  "The deck states that Bitcoin is not legal tender in Vietnam, and describes ownership as an asset-related matter.":
    "Tài liệu nêu rằng Bitcoin không phải là tiền tệ hợp pháp ở Việt Nam, và mô tả việc sở hữu là vấn đề liên quan đến tài sản.",
  "Current legal treatment should be independently re-verified with a qualified adviser.":
    "Chế độ pháp lý hiện tại cần được xác minh độc lập với cố vấn có trình độ.",
  "Do you pay taxes?": "Các bạn có nộp thuế không?",
  "ZEUS states that it operates as a functional company complying with applicable tax laws, and refers to depreciation and continued reinvestment in its operations.":
    "ZEUS tuyên bố rằng công ty hoạt động như một doanh nghiệp chức năng tuân thủ luật thuế hiện hành.",
  "How do you manage heat?": "Các bạn quản lý nhiệt như thế nào?",
  "ZEUS says it manages airflow using conventional approaches: airflow control systems, fans, and water radiators for hydro systems.":
    "ZEUS cho biết họ quản lý luồng khí bằng các phương pháp thông thường: hệ thống điều tiết luồng khí, quạt và két nước giải nhiệt.",
  "What about Bitcoin price volatility?": "Còn sự biến động giá Bitcoin thì sao?",
  "ZEUS expresses a long-term positive view of Bitcoin based on its years of industry experience.":
    "ZEUS bày tỏ quan điểm tích cực dài hạn về Bitcoin dựa trên nhiều năm kinh nghiệm trong ngành.",
  "This is the company's viewpoint, not a guaranteed market outcome and not investment advice.":
    "Đây là quan điểm của công ty, không phải kết quả thị trường được đảm bảo và không phải lời khuyên đầu tư.",
  "Why not simply buy Bitcoin?": "Tại sao không chỉ đơn giản là mua Bitcoin?",
  "ZEUS argues that mining can produce Bitcoin below the purchase price while the equipment continues operating.":
    "ZEUS lập luận rằng khai thác có thể tạo ra Bitcoin dưới giá mua trong khi thiết bị tiếp tục hoạt động.",
  "A company claim. It depends on hardware, energy cost, network difficulty, Bitcoin price and other variables.":
    "Tuyên bố của công ty. Nó phụ thuộc vào phần cứng, chi phí năng lượng, độ khó mạng lưới, giá Bitcoin và các biến số khác.",
  "Does Vietnam have the workforce skills required?":
    "Việt Nam có lực lượng lao động với kỹ năng cần thiết không?",
  "ZEUS acknowledges a skills gap, and says it addresses this through technical leadership and local operations.":
    "ZEUS thừa nhận sự thiếu hụt kỹ năng, và cho biết họ giải quyết điều này thông qua lãnh đạo kỹ thuật và vận hành địa phương.",
  "How does this relate to AI and quantum computing?":
    "Điều này liên quan thế nào đến AI và điện toán lượng tử?",
  "ZEUS frames Bitcoin mining, AI and future advanced computing as infrastructure-intensive computing problems requiring the same facilities, engineering, power and thermal-management capability. That framing is the thesis behind the whole modular data centre direction.":
    "ZEUS xác định khai thác Bitcoin, AI và điện toán tiên tiến trong tương lai là các bài toán điện toán cần nhiều hạ tầng, đòi hỏi cùng một cơ sở, kỹ thuật, điện và khả năng quản lý nhiệt.",

  // ── Technology pillars ────────────────────────────────────────────────────

  "Energy enters\nthe system.": "Năng lượng đi\nvào hệ thống.",
  "Grid supply and decentralised solar, combined and managed before a single watt reaches compute.":
    "Nguồn lưới và điện mặt trời phân tán, được kết hợp và quản lý trước khi một watt nào đó đến điện toán.",
  "Heat is\nthe constraint.": "Nhiệt là\nhạn chế cốt lõi.",
  "Airflow engineering built for a tropical climate, where ambient conditions remove the easy options.":
    "Kỹ thuật luồng khí được xây dựng cho khí hậu nhiệt đới, nơi điều kiện môi trường loại bỏ các lựa chọn dễ dàng.",
  "Density\nunder load.": "Mật độ\ndưới tải.",
  "Racked hardware running continuously, today ASICs, and the same power and thermal envelope that AI accelerators demand.":
    "Thiết bị trong tủ rack chạy liên tục, ngày nay là ASIC, và cùng một giới hạn điện và nhiệt mà các bộ tăng tốc AI đòi hỏi.",
  "Operated\nremotely.": "Vận hành\ntừ xa.",
  "Automation, telemetry and remote monitoring, so a site does not require a permanent crew to stay efficient.":
    "Tự động hoá, đo lường từ xa và giám sát từ xa, để một cơ sở không cần đội ngũ thường trực mà vẫn hoạt động hiệu quả.",
  "Zeus designs systems to integrate with existing power infrastructure rather than replace it, then layers renewable generation on top to reduce operating cost.":
    "ZEUS thiết kế các hệ thống tích hợp với hạ tầng điện hiện có thay vì thay thế nó, sau đó xếp thêm lớp phát điện tái tạo lên trên để giảm chi phí vận hành.",
  "In the SSMDC concept this becomes an explicit grid service: the unit draws excess power when the grid has it, and idles when the grid is under peak load.":
    "Trong thiết kế SSMDC, điều này trở thành một dịch vụ lưới điện rõ ràng: đơn vị lấy điện dư khi lưới có, và nghỉ khi lưới đạt tải đỉnh.",
  "High-density compute is a thermal problem before it is anything else. In a hot, humid climate the margin between working infrastructure and throttled infrastructure is the cooling design.":
    "Điện toán mật độ cao là một bài toán nhiệt trước khi là bất cứ điều gì khác. Trong khí hậu nóng ẩm, ranh giới giữa hạ tầng hoạt động tốt và bị giảm tốc là thiết kế làm mát.",
  "Asked directly how it manages heat, ZEUS describes conventional approaches: airflow control systems, fans, and water radiators for hydro systems.":
    "Khi được hỏi trực tiếp về quản lý nhiệt, ZEUS mô tả các phương pháp thông thường: hệ thống điều tiết luồng khí, quạt và két nước giải nhiệt.",
  "Zeus's operating experience is in Bitcoin infrastructure: hardware that runs at full load, continuously, with no idle periods to recover thermally.":
    "Kinh nghiệm vận hành của ZEUS là trong hạ tầng Bitcoin: thiết bị chạy hết tải, liên tục, không có thời gian nghỉ để hồi phục nhiệt.",
  "That is the discipline the company carries into AI compute and modular data centre work.":
    "Đó là kỷ luật công ty mang vào công việc điện toán AI và trung tâm dữ liệu mô-đun.",
  "Full automation and remote monitoring are core to the SSMDC concept, and remote monitoring, telemetry and control are specified components of the Ai-1 unit.":
    "Tự động hoá hoàn toàn và giám sát từ xa là cốt lõi của thiết kế SSMDC, và giám sát từ xa, đo lường từ xa và điều khiển là các thành phần được chỉ định của đơn vị Ai-1.",
  "Hosted mining customers are offered remote monitoring as part of the service.":
    "Khách hàng lưu trữ máy đào được cung cấp giám sát từ xa như một phần của dịch vụ.",

  // ── Team ──────────────────────────────────────────────────────────────────

  "Founder & CEO": "Nhà sáng lập & Giám đốc điều hành",
  "Co-Founder & CTO": "Đồng sáng lập & Giám đốc công nghệ",
  "Head of Accounting & Legal": "Trưởng phòng Kế toán & Pháp lý",
  "Chief Brand & Marketing Officer": "Giám đốc Thương hiệu & Marketing",
  "Vietnamese entrepreneur with experience in multinational corporate environments, particularly insurance companies.":
    "Doanh nhân người Việt với kinh nghiệm trong môi trường doanh nghiệp đa quốc gia, đặc biệt là các công ty bảo hiểm.",
  "Australian private investor and Vietnam resident. Electrical and electronics engineer and entrepreneur, with approximately 20 years of experience across heavy-industrial engineering environments and military operations and leadership.":
    "Nhà đầu tư tư nhân người Úc, cư trú tại Việt Nam. Kỹ sư điện và điện tử, doanh nhân, với khoảng 20 năm kinh nghiệm trong các môi trường kỹ thuật công nghiệp nặng và lãnh đạo, vận hành quân sự.",
  "Brings strong corporate-governance knowledge to the company.":
    "Mang đến cho công ty kiến thức quản trị doanh nghiệp vững chắc.",
  "Background with Bitcoin.com and BitMEX.": "Có kinh nghiệm tại Bitcoin.com và BitMEX.",

  "Before the company": "Trước khi thành lập công ty",
  "The team states it began working with Bitcoin mining around eight years before the pitch, through more than one market cycle, including bear markets.":
    "Đội ngũ cho biết họ bắt đầu làm việc với khai thác Bitcoin khoảng tám năm trước khi gọi vốn, qua hơn một chu kỳ thị trường, bao gồm cả thị trường giảm.",
  Registration: "Đăng ký thành lập",
  "ZEUS Engineering was officially registered in Vietnam as a privately held, multiple-member limited-liability company with shares, under MST/CRN 0317377894.":
    "ZEUS Engineering được đăng ký chính thức tại Việt Nam dưới dạng công ty trách nhiệm hữu hạn nhiều thành viên tư nhân có phần vốn góp, theo MST/CRN 0317377894.",
  "Self-funded": "Tự cấp vốn",
  "ZEUS states it is financially self-sustaining, and that pre-seed and seed funding were completed using internally generated funds reinvested from its Bitcoin mining operations.":
    "ZEUS cho biết công ty tự chủ tài chính, và nguồn vốn pre-seed và seed được hoàn thành bằng vốn nội sinh tái đầu tư từ hoạt động khai thác Bitcoin.",
  "Hosted services": "Dịch vụ lưu trữ",
  "The company opened hosted-mining services, expanding its potential client base internationally while increasing assets under management.":
    "Công ty mở dịch vụ lưu trữ máy đào, mở rộng cơ sở khách hàng tiềm năng ra quốc tế trong khi tăng tài sản quản lý.",

  "An established company at the time of the pitch, describing itself as audited and prepared for operational scale.":
    "Một công ty đã thành lập vào thời điểm gọi vốn, mô tả bản thân là đã được kiểm toán và sẵn sàng cho quy mô vận hành.",
  "Locally owned, with a foreign co-founder.": "Sở hữu địa phương, với đồng sáng lập người nước ngoài.",
  "Around eight years of Bitcoin mining experience claimed by the team.":
    "Đội ngũ tuyên bố khoảng tám năm kinh nghiệm khai thác Bitcoin.",
  "Strong understanding of the local operating environment and government policy.":
    "Hiểu biết sâu sắc về môi trường vận hành địa phương và chính sách chính phủ.",
  "Import/export licence, with established logistics and payment rails.":
    "Giấy phép xuất nhập khẩu, với logistics và hệ thống thanh toán đã thiết lập.",
  "An engineering chief with approximately 20 years of experience.":
    "Giám đốc kỹ thuật với khoảng 20 năm kinh nghiệm.",
  "Experience operating through difficult market cycles and bear markets.":
    "Kinh nghiệm vận hành qua các chu kỳ thị trường khó khăn và thị trường giảm.",
  "Existing tooling, test and repair equipment, and the technical skills to use them.":
    "Công cụ, thiết bị kiểm tra và sửa chữa hiện có, và kỹ năng kỹ thuật để sử dụng chúng.",
  "A small, highly skilled team experienced in allocating limited capital efficiently.":
    "Đội ngũ nhỏ, có kỹ năng cao, có kinh nghiệm phân bổ vốn hạn chế một cách hiệu quả.",
  "Operational mistakes and lessons that ZEUS says have taught it the pitfalls, risks and mitigations.":
    "Những sai lầm và bài học vận hành mà ZEUS cho biết đã dạy họ về những cạm bắy, rủi ro và biện pháp giảm thiểu.",

  "a private, agile engineering company based in Southern Vietnam, specialising in modular datacenter infrastructure, Bitcoin mining, artificial intelligence (AI), renewable energy integration, and power optimisation technologies":
    "một công ty kỹ thuật tư nhân, linh hoạt có trụ sở tại miền Nam Việt Nam, chuyên về hạ tầng trung tâm dữ liệu mô-đun, khai thác Bitcoin, trí tuệ nhân tạo (AI), tích hợp năng lượng tái tạo và công nghệ tối ưu hoá hệ thống điện",
  "Leave every system safer, more efficient, more reliable, and more valuable than when we arrived.":
    "Để lại mọi hệ thống an toàn hơn, hiệu quả hơn, đáng tin cậy hơn và có giá trị hơn khi chúng tôi đến.",
  "When Zeus leaves, the improvement stays.": "Khi ZEUS rời đi, sự cải tiến vẫn còn đó.",

  // ── Solutions ─────────────────────────────────────────────────────────────

  "Compute.\nContainerised.": "Điện toán.\nĐóng gói container.",
  "Deployed in months, not years.": "Triển khai trong vài tháng, không phải nhiều năm.",
  "Standardised modular designs that reduce deployment risk, contain the impact of individual system failures, and place infrastructure closer to available energy.":
    "Thiết kế mô-đun tiêu chuẩn hoá giúp giảm rủi ro triển khai, giảm thiểu tác động của các sự cố hệ thống đơn lẻ, và đặt hạ tầng gần hơn với nguồn năng lượng có sẵn.",
  "Infrastructure\nfor intelligence.": "Hạ tầng\ncho trí tuệ nhân tạo.",
  "Power, cooling, connectivity, control.": "Điện, làm mát, kết nối, điều khiển.",
  "High-density AI compute is a physical problem before it is a software one. The engineering that keeps ASICs running in a tropical climate is the engineering that keeps accelerators running.":
    "Điện toán AI mật độ cao là bài toán vật lý trước khi là bài toán phần mềm. Kỹ thuật giữ cho ASIC chạy trong khí hậu nhiệt đới là kỹ thuật giữ cho các bộ tăng tốc hoạt động.",
  "Built through\ncontinuous compute.": "Được xây dựng qua\
điện toán liên tục.",
  "The proving ground.": "Nơi kiểm chứng.",
  "ASIC deployment, power infrastructure, cooling, monitoring and maintenance, run continuously, in heat and humidity, where efficiency is the margin.":
    "Triển khai ASIC, hạ tầng điện, làm mát, giám sát và bảo trì, vận hành liên tục, trong nóng ẩm, nơi hiệu quả là biên lợi nhuận.",
  "Your hardware.\nOur infrastructure.": "Máy của bạn.\nHạ tầng của chúng tôi.",
  "Hardware, hosting, operations, monitoring, maintenance, payout.":
    "Phần cứng, lưu trữ, vận hành, giám sát, bảo trì, thanh toán.",
  "A commercially active offering: Zeus provides the power infrastructure, cooling, monitoring and maintenance; you hold the hardware and receive monthly BTC payouts.":
    "Dịch vụ đang hoạt động thương mại: ZEUS cung cấp hạ tầng điện, làm mát, giám sát và bảo trì; bạn sở hữu thiết bị và nhận thanh toán BTC hàng tháng.",
  "Compute starts\nwith power.": "Điện toán bắt đầu\ntừ điện.",
  "Grid and solar, managed as one system.": "Lưới điện và năng lượng mặt trời, quản lý như một hệ thống duy nhất.",
  "Systems designed to integrate with existing power infrastructure while leveraging renewable energy, particularly solar, to reduce operating costs and improve energy efficiency.":
    "Các hệ thống được thiết kế để tích hợp với hạ tầng điện hiện có trong khi tận dụng năng lượng tái tạo, đặc biệt là điện mặt trời, để giảm chi phí vận hành và cải thiện hiệu quả năng lượng.",

  // ── Hosting ───────────────────────────────────────────────────────────────

  "Equipment operation": "Vận hành thiết bị",
  Maintenance: "Bảo trì",
  "Power infrastructure": "Hạ tầng điện",
  "Site security and access": "An ninh và kiểm soát ra vào cơ sở",
  Enquire: "Tư vấn",
  "Scope the deployment: how many machines, what hardware, and the service arrangement.":
    "Xác định phạm vi triển khai: bao nhiêu máy, loại thiết bị nào và hình thức dịch vụ.",
  Deploy: "Triển khai",
  "Equipment is received, racked, powered and commissioned into the facility.":
    "Thiết bị được tiếp nhận, lắp vào tủ rack, cấp điện và đưa vào vận hành tại cơ sở.",
  Operate: "Vận hành",
  "Hardware runs on ZEUS power and cooling infrastructure, managed by the ZEUS team.":
    "Thiết bị chạy trên hạ tầng điện và làm mát của ZEUS, được quản lý bởi đội ngũ ZEUS.",
  Monitor: "Giám sát",
  "Equipment status and performance are tracked through the operations layer.":
    "Trạng thái và hiệu suất thiết bị được theo dõi qua lớp vận hành.",
  "Maintenance is handled on site, using ZEUS's own tooling, test and repair equipment.":
    "Bảo trì được thực hiện tại chỗ, sử dụng công cụ, thiết bị kiểm tra và sửa chữa của ZEUS.",
  Settle: "Quyết toán",
  "Earnings are settled with the client, net of the 10% service fee.":
    "Thu nhập được quyết toán với khách hàng, trừ đi phí dịch vụ 10%.",
  "Mining returns depend on the Bitcoin price, network difficulty, energy cost and machine performance, all of which vary and none of which ZEUS controls. ZEUS does not guarantee profitability, payout amounts, uptime or return on investment. Any estimate ZEUS publishes is a projection based on stated assumptions, not a forecast of your result.":
    "Lợi nhuận khai thác phụ thuộc vào giá Bitcoin, độ khó mạng lưới, chi phí năng lượng và hiệu suất thiết bị, tất cả đều biến động và không có yếu tố nào ZEUS kiểm soát được. ZEUS không đảm bảo lợi nhuận, số tiền thanh toán, thời gian hoạt động hoặc tỷ suất hoàn vốn.",

  // ── Roadmap ────────────────────────────────────────────────────────────────

  "Operating now": "Đang vận hành",
  "Target, contingent on the raise": "Mục tiêu, phụ thuộc vào vòng huy động",
  "Stated long-term ambition": "Tham vọng dài hạn đã tuyên bố",
  Ambition: "Tham vọng",
  "Vietnam prototype": "Nguyên mẫu tại Việt Nam",
  "An operational ASIC site in Vietnam running a live Bitcoin workload, the foundation the SSMDC design is drawn from.":
    "Một cơ sở ASIC đang vận hành tại Việt Nam chạy khối lượng công việc Bitcoin thực, nền tảng mà thiết kế SSMDC được xây dựng từ đó.",
  "100 kWp ASIC site operational": "Cơ sở ASIC 100 kWp đang vận hành",
  "DC-DC and solar-plus-battery lessons captured": "Bài học DC-DC và điện mặt trời kết hợp pin đã được ghi lại",
  "Team and process in place": "Đội ngũ và quy trình đã sẵn sàng",
  "SSMDC v1 nodes": "Các cụm SSMDC v1",
  "Standardised modules deployed in the Bà Rịa region and additional southern sites, running first AI workloads alongside mining.":
    "Các mô-đun tiêu chuẩn hoá được triển khai ở khu vực Bà Rịa và các địa điểm miền Nam bổ sung, chạy các khối lượng công việc AI đầu tiên song song với khai thác.",
  "Standardised 400 m² class modules": "Các mô-đun tiêu chuẩn loại 400 m²",
  "Bà Rịa and additional southern sites": "Bà Rịa và các địa điểm miền Nam bổ sung",
  "First AI workloads alongside mining": "Các khối lượng công việc AI đầu tiên song song với khai thác",
  "Network expansion": "Mở rộng mạng lưới",
  "A multi-node portfolio held against a combined real-estate and compute balance sheet, with an Australian company vehicle.":
    "Danh mục nhiều cụm nắm giữ trên bảng cân đối kế toán kết hợp bất động sản và điện toán, với pháp nhân công ty tại Úc.",
  "Australia company vehicle": "Pháp nhân công ty tại Úc",
  "Multi-node portfolio": "Danh mục nhiều cụm",
  "Real-estate plus compute balance sheet": "Bảng cân đối kế toán bất động sản và điện toán",
  "One stage is operating. Everything after it is contingent on the raise completing, and is described by ZEUS as a plan rather than a commitment. No node beyond the Vietnam prototype has been built, and no timeline is guaranteed.":
    "Một giai đoạn đang vận hành. Tất cả những gì sau đó phụ thuộc vào việc vòng huy động vốn hoàn thành, và được ZEUS mô tả là kế hoạch chứ không phải cam kết.",

  // ── Why Vietnam ────────────────────────────────────────────────────────────

  "Low capex and opex": "Chi phí đầu tư và vận hành thấp",
  "ZEUS argues that Vietnam offers comparatively low land, factory setup and workforce costs, supporting capital-efficient infrastructure development.":
    "ZEUS lập luận rằng Việt Nam có chi phí đất đai, thiết lập nhà máy và nhân công tương đối thấp, hỗ trợ phát triển hạ tầng hiệu quả vốn.",
  "Competitive power rates": "Giá điện cạnh tranh",
  "The deck describes Vietnam's power rates as competitive, and says further benefits may be available at wholesale consumption levels above 1 MW, which is part of why the expansion plan targets that threshold.":
    "Tài liệu mô tả giá điện của Việt Nam là cạnh tranh, và cho biết có thể có thêm lợi ích ở mức tiêu thụ bán sỉ trên 1 MW.",
  "Abundant sunlight": "Nắng dồi dào",
  "Year-round sunlight, plus access to locally and regionally manufactured solar equipment, as an opportunity to reduce power expense through solar integration.":
    "Nắng quánh năm, cộng với khả năng tiếp cận thiết bị năng lượng mặt trời sản xuất trong nước và khu vực, như cơ hội giảm chi phí điện thông qua tích hợp năng lượng mặt trời.",
  "Supportive government policies": "Chính sách chính phủ hỗ trợ",
  "The deck argues that Vietnam is seeking greater participation in data centres, AI technology, regulated digital-asset markets and foreign investment.":
    "Tài liệu lập luận rằng Việt Nam đang tìm kiếm sự tham gia lớn hơn vào trung tâm dữ liệu, công nghệ AI, thị trường tài sản kỹ thuật số được quản lý và đầu tư nước ngoài.",
  "Regulatory position stated in ZEUS's deck. Independently re-verify before relying on it.":
    "Lập trường pháp lý được nêu trong tài liệu của ZEUS. Kiểm tra độc lập trước khi dựa vào đó.",
  "Convenient logistics": "Logistics thuận tiện",
  "Proximity to and trade relationship with China, where much of the required equipment and components are manufactured or distributed.":
    "Gần với Trung Quốc và có quan hệ thương mại, nơi nhiều thiết bị và linh kiện cần thiết được sản xuất hoặc phân phối.",
  "Comparatively low taxes": "Thuế tương đối thấp",
  "The deck cites a nominal Vietnamese corporate tax rate of 20%, and refers to potential reductions or customs treatment for certain computing and software activities.":
    "Tài liệu dẫn mức thuế doanh nghiệp danh nghĩa của Việt Nam là 20%, và đề cập đến các khoản giảm thuế tiềm năng cho một số hoạt động điện toán và phần mềm.",
  "Tax position stated in ZEUS's deck. Verify with a qualified adviser before relying on it.":
    "Lập trường thuế được nêu trong tài liệu của ZEUS. Xác minh với cố vấn có trình độ trước khi dựa vào đó.",

  // ── Products ───────────────────────────────────────────────────────────────

  "Decentralised AI compute. Deployed in months, not years.":
    "Điện toán AI phân tán. Triển khai trong vài tháng, không phải nhiều năm.",
  "A ZEUS product direction. ZEUS has not published a count of deployed units.":
    "Một hướng sản phẩm của ZEUS. ZEUS chưa công bố số lượng đơn vị đã triển khai.",
  "The Small Solar Modular Data Centre is designed for rapid deployment and operation using available grid power between 100–200 kW, with up to 100 kW solar supplement.":
    "Trung tâm Dữ liệu Mô-đun Nhỏ Chạy Điện Mặt Trời được thiết kế để triển khai và vận hành nhanh chóng với nguồn lưới điện sẵn có từ 100–200 kW, với tối đa 100 kW điện mặt trời bổ sung.",
  "Suitable for the harshest of environments, with full automation and remote monitoring for Bitcoin mining and/or AI compute.":
    "Phù hợp với các môi trường khắc nghiệt nhất, với tự động hoá hoàn toàn và giám sát từ xa cho khai thác Bitcoin và/hoặc điện toán AI.",
  "The SSMDC can assist in load balancing of the grid, using excess power when available, and idling when the grid is under peak loads.":
    "SSMDC có thể hỗ trợ cân bằng phụ tải lưới điện, sử dụng điện dư khi có sẵn và nghỉ khi lưới điện đang ở tải đỉnh.",
  "Node design (current)": "Thiết kế cụm (hiện tại)",
  "400 m² class site": "Địa điểm loại 400 m²",
  "80–120 kWp solar": "80–120 kWp điện mặt trời",
  "300–500 kWh usable battery (3–5 h class)": "300–500 kWh pin khả dụng (loại 3–5 giờ)",
  "50–75 kW continuous IT load": "50–75 kW phụ tải CNTT liên tục",
  "End-to-end DC-DC, 8–15% ongoing saving": "DC-DC đầu cuối đến đầu cuối, tiết kiệm 8–15% liên tục",
  "Grid-connected variant": "Biến thể kết nối lưới",
  "100–200 kW available grid power": "100–200 kW điện lưới có sẵn",
  "Up to 100 kW solar supplement": "Tối đa 100 kW điện mặt trời bổ sung",
  "Grid load balancing, draws excess, idles at peak":
    "Cân bằng phụ tải lưới, lấy điện dư, nghỉ khi đạt đỉnh",
  Workload: "Khối lượng công việc",
  "AI training and inference": "Đào tạo và suy diễn AI",
  "Bitcoin mining": "Khai thác Bitcoin",
  "Mixed operation": "Vận hành hỗn hợp",
  Operation: "Vận hành",
  "Full automation": "Tự động hoá hoàn toàn",
  "Remote monitoring": "Giám sát từ xa",
  "Designed for harsh environments": "Thiết kế cho môi trường khắc nghiệt",
  "One panel. Off-grid compute.": "Một tấm pin. Điện toán không cần lưới.",
  "A long-running ZEUS development project. Not presented by ZEUS as a deployed commercial fleet.":
    "Một dự án phát triển lâu dài của ZEUS. ZEUS không trình bày đây là một hệ thống thương mại đã triển khai.",
  "The All-in-One has been a project of ours for years, long before the required hardware existed.":
    "All-in-One đã là một dự án của chúng tôi nhiều năm nay, từ lâu trước khi phần cứng cần thiết tồn tại.",
  "A single unit the size of a standard 2×1 m solar panel (plus auxiliary panel) that can provide both Bitcoin mining and AI compute, day and night, using only solar power. No grid connection required.":
    "Một đơn vị đơn lẻ có kích thước bằng tấm pin mặt trời tiêu chuẩn 2×1 m (cộng thêm tấm phụ) có thể cung cấp cả khai thác Bitcoin và điện toán AI, ngày và đêm, chỉ sử dụng điện mặt trời. Không cần kết nối lưới.",
  "The unit is intended to be deployed in the thousands and interconnected as one large decentralised computing network.":
    "Đơn vị này được dự định triển khai hàng nghìn chiếc và kết nối với nhau như một mạng lưới điện toán phân tán lớn.",
  "Standard 2×1 m solar panel": "Tấm pin mặt trời tiêu chuẩn 2×1 m",
  "High-efficiency monocrystalline cells": "Tế bào đơn tinh thể hiệu suất cao",
  "Maximum power output": "Công suất đầu ra tối đa",
  "Durable aluminium frame": "Khung nhôm bền vững",
  "Weatherproof and built to last": "Chống thời tiết và bền lâu",
  "Battery bank": "Kho pin",
  "LiFePO4 battery cells": "Pin LiFePO4",
  "48 V system": "Hệ thống 48 V",
  "Long cycle life": "Tuổi thọ chu kỳ dài",
  "High safety and stability": "An toàn và ổn định cao",
  "Main controller board": "Bo mạch điều khiển chính",
  "System management unit": "Đơn vị quản lý hệ thống",
  "Power management": "Quản lý điện",
  "Monitoring and telemetry": "Giám sát và đo lường từ xa",
  "Remote access": "Truy cập từ xa",
  "Bitcoin mining hashboard": "Bo mạch băm khai thác Bitcoin",
  "Dedicated ASIC hashboard": "Bo mạch băm ASIC chuyên dụng",
  "High hashrate performance": "Hiệu suất hashrate cao",
  "Energy optimised": "Tối ưu hoá năng lượng",
  "AI compute GPU": "GPU điện toán AI",
  "NVIDIA high-performance GPU": "GPU hiệu suất cao NVIDIA",
  "AI inference and training": "Suy diễn và đào tạo AI",
  "24/7 AI workloads": "Khối lượng công việc AI 24/7",
  "100% solar powered": "100% chạy bằng điện mặt trời",
  "Runs 24/7 off-grid. Clean, silent, sustainable.": "Chạy 24/7 không cần lưới. Sạch, yên lặng, bền vững.",
  "Battery stored": "Lưu trữ trong pin",
  "Integrated LiFePO4 battery stores energy for night and cloudy conditions.":
    "Pin LiFePO4 tích hợp lưu trữ năng lượng cho ban đêm và thời tiết nhiều mây.",
  "AI compute ready": "Sẵn sàng cho điện toán AI",
  "High-performance GPU for AI workloads anytime, anywhere.":
    "GPU hiệu suất cao cho khối lượng công việc AI mọi lúc, mọi nơi.",
  "Dedicated ASIC hashboard delivers maximum BTC mining efficiency.":
    "Bo mạch băm ASIC chuyên dụng mang lại hiệu suất khai thác BTC tối đa.",
  "Rugged and durable": "Chắc chắn và bền bỉ",
  "Built into a solar panel. Weatherproof, sealed and built for any environment.":
    "Được tích hợp trong tấm pin mặt trời. Chống thời tiết, được niêm kín và xây dựng cho mọi môi trường.",
  "Smart and connected": "Thông minh và kết nối",
  "Remote monitoring, telemetry and control from anywhere.":
    "Giám sát từ xa, đo lường từ xa và điều khiển từ bất cứ đâu.",
  "Built in house.": "Được xây dựng nội bộ.",
  "An internal ZEUS tool.": "Một công cụ nội bộ của ZEUS.",
  "S3XY Ai is our own custom-built, private, in-house AI, designed and trained to provide all forms of business and engineering tasks.":
    "S3XY Ai là AI tuù chỉnh của chúng tôi, được xây dựng nội bộ và bảo mật, được thiết kế và đào tạo để cung cấp tất cả các dạng công việc kinh doanh và kỹ thuật.",
  "It covers accounting, legal, reception, strategic planning, engineering research and design, and more.":
    "Nó bao gồm kế toán, pháp lý, tiếp tân, lập kế hoạch chiến lược, nghiên cứu và thiết kế kỹ thuật, và nhiều hơn nữa.",
  "No more burning tokens and cash on ever-increasing subscriptions.":
    "Không còn đốt token và tiền vào các gói đăng ký ngày càng tăng nữa.",
  Accounting: "Kế toán",
  Legal: "Pháp lý",
  Reception: "Tiếp tân",
  "Strategic planning": "Lập kế hoạch chiến lược",
  "Engineering research and design": "Nghiên cứu và thiết kế kỹ thuật",

  // ── Technology pillar detail page blocks ─────────────────────────────────

  // Power page blocks
  "Grid integration": "Tích hợp lưới điện",
  "Systems are designed to integrate with existing power infrastructure rather than replace it. In the SSMDC node design the grid becomes a supplement rather than the primary supply, with on-site generation and storage carrying the continuous load.":
    "Các hệ thống được thiết kế để tích hợp với hạ tầng điện hiện có thay vì thay thế nó. Trong thiết kế cụm SSMDC, lưới điện trở thành nguồn bổ sung chứ không phải nguồn chính, với hệ thống phát và lưu trữ tại chỗ gánh tải liên tục.",
  "Solar generation": "Phát điện mặt trời",
  "ZEUS reports 20 kWp at the operating prototype. The SSMDC node design targets 80–120 kWp with 300–500 kWh of usable battery, yielding an estimated 130–190 MWh a year in southern Vietnam.":
    "ZEUS báo cáo 20 kWp tại nguyên mẫu đang vận hành. Thiết kế cụm SSMDC nhắm mục tiêu 80–120 kWp với 300–500 kWh pin khả dụng, ước tính tạo ra 130–190 MWh mỗi năm tại miền Nam Việt Nam.",
  "DC-DC distribution": "Phân phối DC-DC",
  "Solar generates DC, batteries store DC and compute consumes DC. Keeping the path DC end to end removes the inverter and the server-side AC-DC stage, a stated 8–15% ongoing facility saving, with a practical 10–12% central case.":
    "Điện mặt trời tạo ra DC, pin lưu trữ DC và máy tính tiêu thụ DC. Giữ nguyên đường DC từ đầu đến cuối loại bỏ nghịch lưu và bước AC-DC phía máy chủ, tiết kiệm cơ sở liên tục được công bố 8–15%, với trường hợp thực tế trung tâm 10–12%.",
  "Flexible load": "Tải linh hoạt",
  "In the SSMDC concept the site behaves as a grid-friendly load: drawing excess power when available, idling when the grid is under peak demand.":
    "Trong thiết kế SSMDC, cơ sở hoạt động như một tải thân thiện với lưới: lấy điện dư khi có sẵn, nghỉ khi lưới đang ở tải đỉnh.",

  // Cooling page blocks
  "The problem": "Vấn đề",
  "High-density compute converts almost all the power it draws into heat. In a hot, humid climate there is less thermal headroom to work with, and the margin between infrastructure that performs and infrastructure that throttles is the cooling design.":
    "Điện toán mật độ cao chuyển đổi hầu hết điện năng thông qua thành nhiệt. Trong khí hậu nóng ẩm, không gian nhiệt để làm việc nhỏ hơn, và ranh giới giữa hạ tầng hoạt động tốt và bị giảm tốc là thiết kế làm mát.",
  "The approach": "Cách tiếp cận",
  "Asked directly how it manages heat, ZEUS describes conventional engineering: airflow control systems, fans, and water radiators for hydro systems. Not exotic, but proven and maintainable - which matters more at a site that must run continuously.":
    "Khi được hỏi trực tiếp về quản lý nhiệt, ZEUS mô tả kỹ thuật thông thường: hệ thống điều tiết luồng khí, quạt và két nước giải nhiệt. Không kỳ lạ, nhưng đã được chứng minh và dễ bảo trì, điều quan trọng hơn tại một cơ sở phải chạy liên tục.",
  "Why it scales": "Tại sao nó có thể mở rộng",
  "Conventional airflow engineering is repeatable. It uses parts that can be sourced and serviced locally, by a team that already knows them. That is what makes it viable inside a standardised modular unit rather than a bespoke facility.":
    "Kỹ thuật luồng khí thông thường có thể lặp lại. Nó sử dụng các bộ phận có thể được cung cấp và bảo trì tại địa phương, bởi một nhóm đã quen với chúng. Đó là điều làm cho nó khả thi trong một đơn vị mô-đun tiêu chuẩn hóa thay vì một cơ sở riêng biệt.",
  "What is not claimed": "Những gì không được tuyên bố",
  "No rated operating temperature, humidity ceiling, PUE figure or uptime guarantee appears anywhere on this site. ZEUS has not published them.":
    "Không có nhiệt độ vận hành được đánh giá, trần độ ẩm, chỉ số PUE hay đảm bảo thời gian hoạt động nào xuất hiện trên trang web này. ZEUS chưa công bố chúng.",

  // Compute page blocks
  "Today: ASICs": "Hiện tại: ASIC",
  "ZEUS reports more than 1 PH of peak hash power at a 100 kW facility. This is hardware at full load, continuously, with no idle window in which to recover thermally - the least forgiving version of the problem.":
    "ZEUS báo cáo hơn 1 PH công suất băm đỉnh tại một cơ sở 100 kW. Đây là phần cứng ở tải đầy, liên tục, không có cử sổ ngỏ vục để hồi phục nhiệt, dạng bài toán khắc nghiệt nhất.",
  "The transferable part": "Phần có thể chuyển giao",
  "What ZEUS has learned is not specific to mining silicon. Power delivery to the rack, heat rejection, monitoring and maintenance under continuous load are the same disciplines regardless of what the rack is computing.":
    "Những gì ZEUS đã học không riêng gì cho silicon khai thác. Phân phối điện tới rack, thải nhiệt, giám sát và bảo trì dưới tải liên tục là những kỹ năng giống nhau bất kể rack đang tính toán gì.",
  "Next: AI and beyond": "Tiếp theo: AI và hơn nữa",
  "ZEUS frames Bitcoin mining, AI and future advanced computing as one class of infrastructure-intensive problem. The stated long-term direction is containerised units compatible with Bitcoin mining, AI and quantum-computing applications.":
    "ZEUS xác định khai thác Bitcoin, AI và điện toán tiên tiến trong tương lai là một nhóm bài toán cần nhiều hạ tầng. Hướng dài hạn đã tuyên bố là các đơn vị đóng gói container tương thích với khai thác Bitcoin, AI và các ứng dụng điện toán lượng tử.",
  "Honest position": "Vị trí trung thực",
  "ZEUS does not operate an AI cluster today. The AI direction is a stated product direction supported by operating experience, not a deployed fleet.":
    "ZEUS hiện không vận hành một cluster AI. Hướng AI là một hướng sản phẩm đã tuyên bố được hỗ trợ bởi kinh nghiệm vận hành, không phải một fleet đã triển khai.",

  // Monitoring page blocks
  "Why it exists": "Tại sao nó tồn tại",
  "A unit sited next to available energy cannot depend on a permanent on-site crew. Remote operation is what makes a distributed, modular estate viable at all, rather than a collection of sites each needing staff.":
    "Một đơn vị đặt cạnh nguồn năng lượng sẵn có không thể phụ thuộc vào một nhóm thường trực tại chỗ. Vận hành từ xa là điều làm cho một bất động sản phân tán, mô-đun có thể hoạt động, thay vì một tập hợp các cơ sở mỗi nơi đều cần nhân viên.",
  "In the SSMDC": "Trong SSMDC",
  "Full automation and remote monitoring are core to the SSMDC concept, alongside the grid load-balancing behaviour that requires the unit to respond to conditions without anyone present.":
    "Tự động hoá hoàn toàn và giám sát từ xa là cốt lõi của thiết kế SSMDC, cùng với hành vi cân bằng phụ tải lưới đòi hỏi đơn vị phản hồi với điều kiện mà không có ai hiện diện.",
  "In the Ai-1": "Trong Ai-1",
  "The Ai-1 specification lists a main controller board providing system management, power management, monitoring and telemetry, and remote access.":
    "Thông số kỹ thuật Ai-1 liệt kê một bo mạch điều khiển chính cung cấp quản lý hệ thống, quản lý điện, giám sát và đo lường từ xa, và truy cập từ xa.",
  "For hosting clients": "Dành cho khách hàng lưu trữ",
  "Hosted mining customers are offered monitoring of equipment status and performance as part of the service arrangement.":
    "Khách hàng lưu trữ máy đào được cung cấp giám sát trạng thái và hiệu suất thiết bị như một phần của thỏa thuận dịch vụ.",

  // AI infrastructure inline blocks
  "Lower risk": "Rủi ro thấp hơn",
  "Deployment is incremental rather than all at once.": "Triển khai tăng dần thay vì một lần.",
  "Contained failure": "Hỏ hỏng được kiểm soát",
  "One unit failing is not the whole site failing.": "Một đơn vị hỏ không phải toàn bộ cơ sở hỏ.",
  Maintainable: "Dễ bảo trì",
  "Standard units mean standard parts and procedures.": "Các đơn vị tiêu chuẩn có nghĩa là các bộ phận và quy trình tiêu chuẩn.",
  "Sited by energy": "Đặt gần năng lượng",
  "Infrastructure moves to the power, not the reverse.": "Hạ tầng di chuyển đến nguồn điện, không phải ngược lại.",
  "More watts per rack, delivered cleanly and continuously.": "Nhiều watt hơn mỗi rack, được cung cấp sạch và liên tục.",
  "More heat to move out of a smaller volume.": "Nhiều nhiệt hơn cần được thay ra khỏi một thể tích nhỏ hơn.",
  Connectivity: "Kết nối",
  "Links that do not become the bottleneck.": "Các liên kết không trở thành điểm nghẽọ.",
  "Telemetry and remote operation as standard.": "Đo lường từ xa và vận hành từ xa là tiêu chuẩn.",

  // Chapter nav labels in investors page
  "$2.69M, itemised, what it buys and over what runway.":
    "$2.69M, được phân mục, mua được gì và trong thời gian bao lâu.",
  "What a 400 m² node produces, costs and computes.":
    "Một cụm 400 m² tạo ra gì, chi phí và tính toán bao nhiêu.",
  Roadmap: "Lộ trình",
  "Prototype, first nodes, network, and which of those exists.":
    "Nguyên mẫu, các cụm đầu tiên, mạng lưới, và những gì đã tồn tại.",
  "Capex, power, sunlight, logistics and tax. With ZEUS's own caveats.":
    "Chi phí đầu tư, điện, nắng, logistics và thuế. Cùng với lưu ý riêng của ZEUS.",

  // Status badge item bodies in investors page
  "A figure ZEUS publishes about its own operations. Not independently audited.":
    "Một con số ZEUS công bố về hoạt động của mình. Chưa được kiểm toán độc lập.",
  "An objective contingent on funding. Not a current capability and not a commitment.":
    "Một mục tiêu phụ thuộc vào việc tài trợ. Không phải khả năng hiện tại và không phải cam kết.",
  "A management forecast resting on stated assumptions. Not a record of performance.":
    "Dự báo quản lý dựa trên các giả định đã nêu. Không phải kết quả hoạt động.",
  "A product direction or engineering concept. Not a count of deployed units.":
    "Một hướng sản phẩm hoặc khái niệm kỹ thuật. Không phải số lượng đơn vị đã triển khai.",

  // FAQ topic labels
  Economics: "Kinh tế",
  Hardware: "Phần cứng",
  Engineering: "Kỹ thuật",
  Regulatory: "Pháp lý",
  Strategy: "Chiến lược",


  // ── Vision page ──────────────────────────────────────────────────────────────
  "The product": "Sản phẩm",
  "The network": "Mạng lưới",
  "The origin": "Nguồn gốc",
  "The ambition": "Tham vọng",
  "Bitcoin paid for\nthe education.": "Bitcoin trả tiền\ncho kinh nghiệm.",
  "Four problems,\none machine.": "Bốn vấn đề,\nmột hệ thống.",
  "A data centre\nyou can repeat.": "Một trung tâm dữ liệu\ncó thể nhân rộng.",
  "AI arrived with\nthe same problem.": "AI đến với\ncùng một thách thức.",
  "Uptime by nodes,\nnot by site.": "Hoạt động liên tục qua nút,\nkhông phải địa điểm.",
  "Engineered\nin Vietnam.": "Xây dựng\ntại Việt Nam.",
  "Built here.\nDeployed anywhere.": "Xây tại đây.\nTriển khai khắp nơi.",
  "ZEUS did not start with a thesis about AI. It started with machines that had to stay running: hardware at full load, continuously, in a hot and humid climate, where the margin between a working site and a throttled one is the engineering around the silicon.": "ZEUS không bắt đầu với luận điểm về AI. Đó là những máy móc phải duy trì hoạt động liên tục: phần cứng ở tải đầy, liên tục, trong khí hậu nóng và ẩm, nơi khoảng cách giữa cơ sở hoạt động tốt và cơ sở bị hạn chế chính là kỹ thuật xung quanh chip silicon.",
  "That is a demanding way to learn power delivery, heat rejection, monitoring and maintenance. It is also the only part of this story that has already happened.": "Đó là cách khắt khe để học về cung cấp điện, tản nhiệt, giám sát và bảo trì. Đây cũng là phần duy nhất trong câu chuyện này đã thực sự xảy ra.",
  "Power, cooling, compute and control are not four departments. Each one constrains the next, and the thing that fails first is almost never the processor.": "Điện, làm mát, điện toán và kiểm soát không phải là bốn bộ phận riêng biệt. Mỗi yếu tố ràng buộc yếu tố tiếp theo, và thứ hỏng trước hầu như không bao giờ là bộ xử lý.",
  "Treating them as a single system is what makes a site repeatable rather than bespoke.": "Coi chúng là một hệ thống duy nhất mới tạo nên cơ sở có thể nhân rộng thay vì dạng đặt hàng riêng lẻ.",
  "If the whole system fits in a standardised unit, capacity stops being a construction project and becomes a manufacturing one. Build the node once, then build it again.": "Nếu toàn bộ hệ thống nằm trong một đơn vị tiêu chuẩn, công suất không còn là dự án xây dựng mà trở thành dự án sản xuất. Xây dựng cụm một lần, rồi xây lại.",
  "That is the SSMDC: solar, storage, DC distribution and compute on a 400 m² class pad, designed to be added to rather than enlarged.": "Đó là SSMDC: năng lượng mặt trời, lưu trữ, phân phối DC và điện toán trên mặt bằng loại 400 m², được thiết kế để bổ sung thêm chứ không phải mở rộng.",
  "Accelerators want more watts per rack and produce more heat in less volume. The workload changed; the physical constraint did not.": "Bộ tăng tốc cần nhiều watt hơn cho mỗi rack và tỏa ra nhiều nhiệt hơn trong thể tích nhỏ hơn. Khối lượng công việc thay đổi; ràng buộc vật lý thì không.",
  "ZEUS does not operate an AI cluster today. What it has is the engineering that decides whether one would run or throttle.": "ZEUS hiện không vận hành cụm AI. Những gì ZEUS có là kỹ thuật quyết định liệu một cụm như vậy có thể chạy hay bị hạn chế.",
  "One large campus concentrates its risk in one place: one grid connection, one permit regime, one set of local politics. A network of small nodes spreads it.": "Một khuôn viên lớn tập trung rủi ro vào một nơi: một kết nối lưới điện, một chế độ cấp phép, một bộ chính trị địa phương. Mạng lưới các nút nhỏ phân tán rủi ro đó.",
  "It also lets infrastructure sit next to available energy instead of asking the energy to come to it.": "Nó cũng cho phép cơ sở hạ tầng đặt gần nguồn năng lượng sẵn có thay vì yêu cầu năng lượng phải đến.",
  "Southern Vietnam offers year-round sun, competitive power, manufacturing capacity and proximity to where the equipment is made. ZEUS is locally owned and locally operated.": "Miền Nam Việt Nam mang đến nắng quanh năm, điện năng cạnh tranh, năng lực sản xuất và sự gần gũi với nơi thiết bị được sản xuất. ZEUS thuộc sở hữu và vận hành tại địa phương.",
  "Building the units where the supply chain already is, rather than importing finished infrastructure, is the point.": "Xây dựng các đơn vị ở nơi chuỗi cung ứng đã tồn tại, thay vì nhập khẩu cơ sở hạ tầng hoàn thiện, đó mới là điểm mấu chốt.",
  "A unit that can be manufactured, shipped and commissioned is not limited to the country that made it. The stated long-term direction is Vietnamese-built modular compute deployed internationally.": "Một đơn vị có thể được sản xuất, vận chuyển và đưa vào vận hành không bị giới hạn ở quốc gia sản xuất. Định hướng dài hạn đã tuyên bố là điện toán mô-đun do Việt Nam sản xuất triển khai quốc tế.",
  "That is an ambition, not a plan with dates against it.": "Đó là tham vọng, không phải kế hoạch có ngày tháng kèm theo.",
  "Design target": "Mục tiêu thiết kế",
  "Long-term ambition": "Tham vọng dài hạn",
  "Where ZEUS is going, in seven steps. One of them has already happened. The rest are labelled so you can tell the difference.": "Hướng đi của ZEUS, trong bảy bước. Một trong số đó đã xảy ra. Các bước còn lại được gắn nhãn để bạn có thể phân biệt.",
  "One site running today, a node design costed to the line, and a raise sized to build the first two of them.": "Một cơ sở đang hoạt động hôm nay, thiết kế nút được tính toán chi tiết, và đợt huy động vốn đủ để xây hai nút đầu tiên.",
  "Chapters 03, 04, 05 and 07 describe intended development, not existing capability. See the": "Chương 03, 04, 05 và 07 mô tả phát triển dự kiến, không phải năng lực hiện có. Xem",
  "for what is operating and what is planned.": "để biết những gì đang hoạt động và những gì đã được lên kế hoạch.",
  "Explore SSMDC": "Khám phá SSMDC",
  roadmap: "lộ trình",

  // ── Sources page — status disclosure ─────────────────────────────────────────
  "Operating figures as reported by ZEUS Engineering.": "Số liệu hoạt động theo báo cáo của ZEUS Engineering.",
  "Reported by ZEUS Engineering. Not independently verified.": "Do ZEUS Engineering báo cáo. Chưa được xác minh độc lập.",
  "A stated objective. Not a current capability and not a commitment.": "Mục tiêu đã tuyên bố. Không phải năng lực hiện tại và không phải cam kết.",
  "A management forecast based on stated assumptions. Not a guarantee, a forecast of returns, or a record of past performance.": "Dự báo của ban quản lý dựa trên các giả định đã công bố. Không phải bảo đảm, dự báo lợi nhuận, hay hồ sơ kết quả trong quá khứ.",
  "A product concept or engineering direction. Not a record of deployed units.": "Khái niệm sản phẩm hoặc hướng kỹ thuật. Không phải hồ sơ các đơn vị đã triển khai.",

  // ── Sources page — section strings ───────────────────────────────────────────
  "Claim audit": "Kiểm toán tuyên bố",
  "This site publishes": "Trang này công bố",
  "figures about ZEUS Engineering. Each one is listed below with its status and the ZEUS source it was taken from. Nothing appears on this site that cannot appear on this page.": "số liệu về ZEUS Engineering. Mỗi số liệu được liệt kê bên dưới với trạng thái và nguồn ZEUS nó được lấy từ. Không có gì xuất hiện trên trang này mà không thể xuất hiện trên trang này.",
  "Why this page exists": "Tại sao trang này tồn tại",
  "The question\nthis answers.": "Câu hỏi\nmà trang này trả lời.",
  "Infrastructure companies are judged on figures that are almost impossible for an outsider to check. The usual response is to publish them confidently and hope nobody asks. This is the other option.": "Các công ty hạ tầng được đánh giá qua các số liệu mà người ngoài gần như không thể kiểm chứng. Phản ứng thông thường là công bố tự tin và hy vọng không ai hỏi. Đây là lựa chọn khác.",
  "Nothing is unattributed": "Không có gì thiếu nguồn dẫn",
  "Every figure traces to a named ZEUS document. A figure with no source is not softened or hedged, it is removed.": "Mọi số liệu đều có thể truy nguyên đến một tài liệu ZEUS cụ thể. Số liệu không có nguồn không được làm nhẹ hay làm mờ, mà bị loại bỏ.",
  "Nothing is reconciled for ZEUS": "Không có gì được điều chỉnh thay cho ZEUS",
  "Where two ZEUS documents disagree, both are reproduced and the disagreement is stated openly rather than quietly resolved.": "Khi hai tài liệu ZEUS mâu thuẫn, cả hai đều được trình bày và sự bất đồng được nêu công khai thay vì giải quyết im lặng.",
  "The omissions are listed too": "Những thiếu sót cũng được liệt kê",
  "The figures that were available and flattering, and left out anyway, are named at the bottom of this page.": "Các số liệu có sẵn và thuận lợi, nhưng vẫn bị bỏ qua, được nêu tên ở cuối trang này.",
  "How to read a status": "Cách đọc trạng thái",
  "Five kinds\nof statement.": "Năm loại\ntuyên bố.",
  "Every figure on this site carries one of these. The label is always a word, never a colour alone, so the distinction survives greyscale, colour blindness and a screen reader.": "Mọi số liệu trên trang này đều mang một trong các nhãn này. Nhãn luôn là một từ, không bao giờ chỉ là màu sắc, để sự phân biệt tồn tại trong ảnh xám, mù màu và trình đọc màn hình.",
  "The documents.": "Các tài liệu.",
  "Four ZEUS sources sit behind everything on this site.": "Bốn nguồn ZEUS làm nền tảng cho mọi thứ trên trang này.",

  // ── Sources page — source documents ──────────────────────────────────────────
  "SSMDC, Small Solar Modular Datacenter": "SSMDC, Trung tâm Dữ liệu Mô-đun Năng lượng Mặt trời Nhỏ",
  "ZEUS Engineering JSC. The current fundraising document, and the source the investor section follows wherever it disagrees with earlier material.": "ZEUS Engineering JSC. Tài liệu huy động vốn hiện tại, và là nguồn mà phần nhà đầu tư theo khi có sự khác biệt với tài liệu cũ hơn.",
  "Pitch deck, reconstructed from the published pitch page": "Bộ thuyết trình, được tái tạo từ trang pitch đã công bố",
  "Reconstructed from ZEUS's own published pitch page. Still the source for the Vung Tau operating figures, which D2 does not restate.": "Được tái tạo từ trang pitch đã công bố của ZEUS. Vẫn là nguồn cho các số liệu hoạt động Vũng Tàu mà D2 không nhắc lại.",
  "ZEUS's live public website.": "Trang web công khai của ZEUS.",
  "Hosted mining offer graphic": "Đồ họa đề nghị khai thác ủy thác",
  "An official ZEUS offer graphic published by the company.": "Đồ họa đề nghị chính thức của ZEUS được công ty công bố.",
  "Confidential, never published here": "Bảo mật, chưa bao giờ được công bố tại đây",
  "Superseded by": "Được thay thế bởi",
  "On the confidential document": "Về tài liệu bảo mật",
  "One of these sources is marked confidential by ZEUS. Its facts inform the copy on this site, because they are ZEUS\u2019s own current position and the alternative is to publish superseded figures. The file itself is never linked, embedded, mirrored or offered for download anywhere here, and no page of it is reproduced.": "Một trong các nguồn này được ZEUS đánh dấu là bảo mật. Các thông tin từ đó được sử dụng trong nội dung trang này, vì chúng phản ánh lập trường hiện tại của ZEUS thay vì công bố các số liệu đã lỗi thời. Bản thân tệp không bao giờ được liên kết, nhúng, sao chép hay cung cấp để tải về, và không có trang nào được tái tạo.",

  // ── Sources page — claim groups ───────────────────────────────────────────────
  "Claim ledger": "Sổ kiểm toán tuyên bố",
  "What ZEUS reports operating today": "Những gì ZEUS báo cáo đang hoạt động hôm nay",
  "These are the only figures on this site that describe something already running. Note the verb in the source: ZEUS reports. They are classified as reported by ZEUS rather than as verified fact, because no independent audit of them exists.": "Đây là những số liệu duy nhất trên trang này mô tả điều gì đó đang vận hành. Lưu ý động từ trong nguồn: ZEUS báo cáo. Chúng được phân loại là do ZEUS báo cáo chứ không phải sự thật đã được xác minh, vì không có kiểm toán độc lập nào.",
  Traction: "Kết quả hoạt động",
  "D2 page 6, the deck's own traction page. The prototype figure is reproduced in ZEUS's units, not converted. See the open question below.": "Trang 6 của D2, trang kết quả hoạt động của bộ thuyết trình. Số liệu nguyên mẫu được trình bày theo đơn vị của ZEUS, không được chuyển đổi. Xem câu hỏi mở bên dưới.",
  "The raise": "Đợt huy động vốn",
  "D2 page 13, verbatim from the deck's own use-of-funds table. A fundraising target is not money received, and this site never renders it as one.": "Trang 13 của D2, trích nguyên văn từ bảng sử dụng vốn của bộ thuyết trình. Mục tiêu huy động vốn không phải tiền đã nhận được, và trang này không bao giờ thể hiện như vậy.",
  "SSMDC node design": "Thiết kế nút SSMDC",
  "D2 pages 5 and 7. Every figure here describes a node that has not been built. They are design ranges, not measured output from anything currently running.": "Trang 5 và 7 của D2. Mọi số liệu ở đây mô tả một nút chưa được xây dựng. Chúng là phạm vi thiết kế, không phải đầu ra được đo lường từ bất cứ thứ gì đang hoạt động.",
  "Compute per node": "Điện toán mỗi nút",
  "D2 page 8. A specification for hardware not yet purchased. No per-GPU power draw is derived anywhere on this site, because ZEUS has not published one.": "Trang 8 của D2. Thông số kỹ thuật cho phần cứng chưa được mua. Không có mức tiêu thụ điện mỗi GPU nào được tính trên trang này, vì ZEUS chưa công bố.",
  "Hosted mining": "Khai thác ủy thác",
  "The commercial terms ZEUS advertises. What this site deliberately leaves out of that same source is set out further down.": "Các điều khoản thương mại ZEUS quảng bá. Những gì trang này cố tình bỏ qua từ nguồn đó được trình bày ở phía dưới.",

  // ── Sources page — claim what fields ─────────────────────────────────────────
  "Facility capacity, Vung Tau": "Công suất cơ sở, Vũng Tàu",
  "Operating site area": "Diện tích cơ sở hoạt động",
  "Peak solar, Vung Tau": "Điện mặt trời đỉnh, Vũng Tàu",
  "Peak hash power": "Công suất đào đỉnh",
  "Systemised asset value": "Giá trị tài sản hệ thống",
  "Operating region": "Vùng hoạt động",
  "Established in Vietnam": "Hoạt động tại Việt Nam",
  "Operational ASIC prototype": "Nguyên mẫu ASIC đang hoạt động",
  "Live compute workload": "Khối lượng điện toán đang chạy",
  "Power architecture validated on the prototype": "Kiến trúc điện được xác nhận trên nguyên mẫu",
  "Total raise sought": "Tổng vốn huy động",
  "GPU and server hardware": "Phần cứng GPU và máy chủ",
  "Founders, staff and contractors": "Nhà sáng lập, nhân viên và nhà thầu",
  "Solar, battery, power and build-out": "Năng lượng mặt trời, pin, điện và xây dựng",
  "Land options, deposits and setup": "Quyền chọn đất, đặt cọc và lắp đặt",
  "R&D, taxes, contingency and working capital": "R&D, thuế, dự phòng và vốn lưu động",
  "Runway to multiple live nodes": "Thời gian đến nhiều nút hoạt động",
  "Site size for one node": "Kích thước mặt bằng cho một nút",
  "Solar capacity per node": "Công suất năng lượng mặt trời mỗi nút",
  "Annual solar yield per node": "Sản lượng năng lượng mặt trời hàng năm mỗi nút",
  "Usable battery, three to five hour class": "Pin sử dụng được, loại ba đến năm giờ",
  "Continuous IT load": "Tải IT liên tục",
  "DC-DC facility power saving, 10\u201312% central case": "Tiết kiệm điện cơ sở DC-DC, trường hợp trung tâm 10\u201312%",
  "Grid supply, grid-connected variant": "Nguồn lưới điện, biến thể kết nối lưới",
  "NVIDIA H100 / H200 GPUs": "GPU NVIDIA H100 / H200",
  "Compute, FP8 sparse": "Điện toán, FP8 thưa",
  "HBM memory": "Bộ nhớ HBM",
  "GPU hardware cost": "Chi phí phần cứng GPU",
  "Tokens per second, 70B class inference": "Token mỗi giây, suy luận loại 70B",
  "8-GPU servers per node": "Máy chủ 8 GPU mỗi nút",
  "Hosted mining package price": "Giá gói khai thác ủy thác",
  "Service fee on earnings": "Phí dịch vụ trên thu nhập",

  // ── Sources page — claim citations ────────────────────────────────────────────
  "\u201cZEUS reports operating a 100 kW facility on a 300 m\u00b2 site in the Vung Tau / B\u00e0 R\u1ecba region, with more than 1 PH peak hash power and 20 kW peak solar.\u201d": "\u201cZEUS báo cáo đang vận hành cơ sở 100 kW trên mặt bằng 300 m\u00b2 tại khu vực Vũng Tàu / Bà Rịa, với công suất đào đỉnh hơn 1 PH và điện mặt trời đỉnh 20 kW.\u201d",
  "Same sentence.": "Cùng câu trên.",
  "\u201cmore than 1 PH peak hash power\u201d": "\u201chơn 1 PH công suất đào đỉnh\u201d",
  "\u201ctotal systemized asset value of approximately US$3 million, including assets under management\u201d": "\u201ctổng giá trị tài sản hệ thống hóa khoảng 3 triệu USD, bao gồm tài sản đang quản lý\u201d",
  "Stated in both D1 and D2 as the region. Neither document names a more specific location, so neither does this site.": "Được nêu trong cả D1 và D2 là khu vực. Không có tài liệu nào nêu vị trí cụ thể hơn, nên trang này cũng vậy.",
  "Page 6.": "Trang 6.",
  "Stated in three places. Page 3, comparison table, \u201cExisting live prototype: 100 kWp operational\u201d. Page 6, \u201c100 kWp / Operational ASIC prototype\u201d. Page 10, \u201c100 kWp BTC ASIC site already running in Vietnam\u201d.": "Được nêu ở ba nơi. Trang 3, bảng so sánh, \u201cNguyên mẫu đang chạy: 100 kWp hoạt động\u201d. Trang 6, \u201c100 kWp / Nguyên mẫu ASIC hoạt động\u201d. Trang 10, \u201cCơ sở BTC ASIC 100 kWp đang chạy tại Việt Nam\u201d.",
  "Page 13, \u201cTHE ASK, $2.69M \u00b7 18\u201324 month runway to multiple live nodes\u201d": "Trang 13, \u201cYÊU CẦU VỐN, 2,69M USD \u00b7 18\u201324 tháng đến nhiều nút hoạt động\u201d",
  "Page 13 table row.": "Hàng bảng trang 13.",
  "Page 7, \u201cSolar capacity, 80\u2013120 kWp (realistic working range)\u201d": "Trang 7, \u201cCông suất mặt trời, 80\u2013120 kWp (phạm vi làm việc thực tế)\u201d",
  "Page 7.": "Trang 7.",
  "Page 5, \u201cReal-world facility-level savings of 8\u201315%, with a practical 10\u201312% central case\u201d. ZEUS's own estimate, not an independently measured result.": "Trang 5, \u201cTiết kiệm thực tế ở mức cơ sở 8\u201315%, với trường hợp trung tâm thực tế 10\u201312%\u201d. Ước tính của ZEUS, không phải kết quả đo lường độc lập.",
  "ZEUS's earlier grid-connected description on the live site. Kept alongside the D2 node spec and labelled as the grid-connected variant rather than merged into it.": "Mô tả kết nối lưới điện trước đó của ZEUS trên trang web đang hoạt động. Được giữ lại cùng với thông số nút D2 và được gắn nhãn là biến thể kết nối lưới thay vì gộp vào.",
  "Page 8.": "Trang 8.",
  "\u201c$10,000 USD Hosted Mining Package\u201d": "\u201cGói Khai thác Ủy thác 10.000 USD\u201d",
  "\u201c10% of earnings in service fees to ZEUS\u201d": "\u201c10% thu nhập làm phí dịch vụ cho ZEUS\u201d",
  "Page 13.": "Trang 13.",

  // ── Sources page — open questions ─────────────────────────────────────────────
  "Open questions": "Câu hỏi mở",
  "Where the sources\ndisagree.": "Nơi các nguồn\nmâu thuẫn.",
  "These are not resolved on this site. They are put to ZEUS.": "Những điều này không được giải quyết trên trang này. Chúng được đặt ra cho ZEUS.",
  "The discrepancy": "Sự khác biệt",
  "How this site handles it": "Cách trang này xử lý",
  "The question for ZEUS": "Câu hỏi dành cho ZEUS",
  "kW and kWp": "kW và kWp",
  "D2 describes the operational prototype as 100 kWp. D1 separately describes the Vung Tau operation as a 100 kW facility with 20 kW peak solar. kW and kWp are different units: one measures capacity, the other measures peak photovoltaic output.": "D2 mô tả nguyên mẫu vận hành là 100 kWp. D1 mô tả riêng hoạt động Vũng Tàu là cơ sở 100 kW với điện mặt trời đỉnh 20 kW. kW và kWp là các đơn vị khác nhau: một đo công suất, đơn vị kia đo sản lượng quang điện đỉnh.",
  "Both figures are reproduced exactly as ZEUS published them, and a short note appears wherever a reader meets either one. This site does not claim the two describe the same site, and does not claim they describe different sites.": "Cả hai số liệu được trình bày chính xác như ZEUS công bố, và một ghi chú ngắn xuất hiện ở bất cứ đâu người đọc gặp một trong hai. Trang này không khẳng định cả hai mô tả cùng một cơ sở, và không khẳng định chúng mô tả các cơ sở khác nhau.",
  "Is the prototype 100 kW of site capacity, or 100 kWp of solar? If it is the latter, it is a separate installation from Vung Tau's 20 kW of solar and deserves naming in its own right.": "Nguyên mẫu là 100 kW công suất cơ sở hay 100 kWp điện mặt trời? Nếu là điều sau, đó là cơ sở riêng biệt so với 20 kW mặt trời của Vũng Tàu và xứng đáng được đặt tên riêng.",

  // ── Sources page — not published ─────────────────────────────────────────────
  "Deliberately not published": "Cố tình không công bố",
  "What was left out.": "Những gì bị bỏ qua.",
  "Anyone can list the figures they used. The test of a claim audit is whether it names the ones that were available, flattering, and left out anyway. These are ZEUS's own claims that do not appear anywhere on this site.": "Ai cũng có thể liệt kê các số liệu họ sử dụng. Thước đo của kiểm toán tuyên bố là liệu nó có nêu tên những số liệu đã có sẵn, thuận lợi nhưng vẫn bị bỏ qua. Đây là các tuyên bố của chính ZEUS không xuất hiện ở bất kỳ đâu trên trang này.",
  "A return figure of roughly 100% per year": "Tỷ suất lợi nhuận khoảng 100% mỗi năm",
  "The same graphic that advertises the $10,000 hosted mining package also advertises \u201cEXTRA $10,000 USD per year\u201d. That is a return claim with no stated assumptions behind it. A return figure whose workings cannot be shown does not belong on an investor-facing site. If ZEUS supplies the assumptions, it can appear as a clearly labelled projection.": "Cùng đồ họa quảng bá gói khai thác ủy thác 10.000 USD cũng quảng bá \u201cTHÊM 10.000 USD mỗi năm\u201d. Đó là tuyên bố lợi nhuận không có giả định rõ ràng đằng sau. Số liệu lợi nhuận mà không thể hiển thị cách tính không thuộc về trang dành cho nhà đầu tư. Nếu ZEUS cung cấp các giả định, nó có thể xuất hiện như một dự báo được gắn nhãn rõ ràng.",
  "Scarcity messaging": "Thông điệp khan hiếm",
  "The same graphic states \u201cONLY 8 SLOTS LEFT\u201d. That is a sales device rather than a fact about the infrastructure, and it is not reproduced.": "Đồ họa tương tự nêu \u201cCHỈ CÒN 8 VỊ TRÍ\u201d. Đó là công cụ bán hàng chứ không phải sự thật về cơ sở hạ tầng, và không được tái tạo.",
  "A third-party logo wall": "Tường logo bên thứ ba",
  "D2 contains a page of third-party company and government logos under the heading \u201cPOTENTIAL CLIENTS & PARTNERS\u201d. Those are aspirations, not relationships. Reproducing them would imply commercial ties that have not been stated to exist, so no third-party logo appears anywhere on this site.": "D2 chứa một trang logo của các công ty và chính phủ bên thứ ba dưới tiêu đề \u201cKHÁCH HÀNG & ĐỐI TÁC TIỀM NĂNG\u201d. Đó là nguyện vọng, không phải mối quan hệ. Tái tạo chúng sẽ ngụ ý các mối quan hệ thương mại chưa được xác nhận, vì vậy không có logo bên thứ ba nào xuất hiện ở bất kỳ đâu trên trang này.",
  "Superseded fundraising figures": "Số liệu huy động vốn đã lỗi thời",
  "D1 contains an entire earlier plan: a $1\u20132M Series A, a 2,000 m\u00b2 industrial site, 500 machines, 1 MW rising to 2 MW, and roughly 20 BTC per year of projected production. D2 replaces that plan. The old figures are kept in the audit file but are not published, so they cannot compete with the current ask.": "D1 chứa một kế hoạch cũ hoàn chỉnh: Series A từ 1\u20132 triệu USD, cơ sở công nghiệp 2.000 m\u00b2, 500 máy, 1 MW tăng lên 2 MW, và khoảng 20 BTC mỗi năm sản lượng dự báo. D2 thay thế kế hoạch đó. Các số liệu cũ được lưu trong tệp kiểm toán nhưng không được công bố, để không cạnh tranh với yêu cầu hiện tại.",
  "Unsourced operating claims": "Tuyên bố hoạt động không có nguồn",
  "A 99.9% uptime figure, 35 \u00b0C and 85% humidity operating conditions, and the phrase \u201clocalised liquid cooling\u201d all appeared in earlier working material for this project. None of them appears in any ZEUS source, so all three were removed rather than softened.": "Số liệu thời gian hoạt động 99,9%, điều kiện vận hành 35\u00b0C và độ ẩm 85%, và cụm từ \u201clàm mát chất lỏng cục bộ\u201d đều xuất hiện trong tài liệu làm việc cũ của dự án này. Không có cái nào trong số đó xuất hiện trong bất kỳ nguồn ZEUS nào, vì vậy cả ba đều bị xóa thay vì làm nhẹ đi.",
  "Everything ZEUS has never claimed": "Mọi thứ ZEUS chưa bao giờ tuyên bố",
  "No customer, partner, contract, investor, deployment, office, employee count, revenue, profitability, certification, patent, award, uptime guarantee, PUE, carbon figure, market-size statistic or valuation appears anywhere on this site. None of them has a ZEUS source.": "Không có khách hàng, đối tác, hợp đồng, nhà đầu tư, triển khai, văn phòng, số lượng nhân viên, doanh thu, lợi nhuận, chứng nhận, bằng sáng chế, giải thưởng, đảm bảo thời gian hoạt động, PUE, số liệu carbon, thống kê quy mô thị trường hay định giá nào xuất hiện ở bất kỳ đâu trên trang này. Không có cái nào có nguồn từ ZEUS.",

  // ── Sources page — footer section ────────────────────────────────────────────
  "If a figure looks wrong": "Nếu một số liệu có vẻ sai",
  "This page is maintained by hand against ZEUS\u2019s own documents, and ZEUS is the authority on its own operations. If a figure here misstates something, or a source has been superseded, say so and it will be corrected or removed.": "Trang này được duy trì thủ công theo tài liệu của ZEUS, và ZEUS là thẩm quyền về hoạt động của mình. Nếu một số liệu ở đây trình bày sai điều gì, hoặc một nguồn đã bị thay thế, hãy nói và nó sẽ được sửa hoặc loại bỏ.",
  "Investor enquiry": "Yêu cầu nhà đầu tư",


  // ── Bitcoin Infrastructure page ───────────────────────────────────────────────
  "Bitcoin is the workload that pays for the infrastructure and proves it at the same time. Machines at full load, continuously, with no idle period to recover thermally, the hardest version of the problem ZEUS is in business to solve.": "Bitcoin là khối lượng công việc vừa trả tiền cho cơ sở hạ tầng vừa chứng minh nó cùng lúc. Máy móc ở tải đầy, liên tục, không có khoảng thời gian dừng để hồi phục nhiệt, đây là phiên bản khó nhất của vấn đề mà ZEUS ra đời để giải quyết.",
  "ZEUS reports operating a facility in the Vung Tau / Ba Ria region on the figures below.": "ZEUS báo cáo đang vận hành cơ sở tại khu vực Vũng Tàu / Bà Rịa với các số liệu dưới đây.",
  "ASIC deployment, racking and commissioning.": "Triển khai ASIC, lắp rack và đưa vào vận hành.",
  "Power infrastructure and distribution to the rack.": "Cơ sở hạ tầng điện và phân phối đến rack.",
  "Thermal management sized for continuous full load.": "Quản lý nhiệt được thiết kế cho tải liên tục đầy đủ.",
  "Monitoring of equipment status and performance.": "Giám sát trạng thái và hiệu suất thiết bị.",
  "On-site maintenance using ZEUS's own tooling and test equipment.": "Bảo trì tại chỗ sử dụng dụng cụ và thiết bị kiểm tra của ZEUS.",
  "Hosted operation of client-owned hardware.": "Vận hành ủy thác phần cứng của khách hàng.",
  "Managing heat": "Quản lý nhiệt",
  "Asked directly how it manages heat, ZEUS describes conventional airflow engineering rather than exotic hardware, which is the more credible answer, and the one that scales.": "Khi được hỏi trực tiếp về cách quản lý nhiệt, ZEUS mô tả kỹ thuật luồng khí thông thường thay vì phần cứng phức tạp, đây là câu trả lời đáng tin cậy hơn và có thể mở rộng quy mô.",
  "No rated operating temperature, humidity limit or uptime guarantee is claimed anywhere on this site.": "Không có nhiệt độ vận hành được định mức, giới hạn độ ẩm hay đảm bảo thời gian hoạt động nào được tuyên bố ở bất kỳ đâu trên trang này.",
  "Common questions": "Câu hỏi thường gặp",
  "ZEUS's own published answers on the economics and the hardware.": "Câu trả lời đã công bố của ZEUS về kinh tế và phần cứng.",
  "Where this leads": "Điều này dẫn đến đâu",

  // ── Energy Integration page ────────────────────────────────────────────────────
  "ZEUS's systems are designed to integrate with existing power infrastructure while leveraging renewable energy, particularly solar, to reduce operating costs and improve energy efficiency.": "Các hệ thống của ZEUS được thiết kế để tích hợp với cơ sở hạ tầng điện hiện có trong khi tận dụng năng lượng tái tạo, đặc biệt là năng lượng mặt trời, để giảm chi phí vận hành và cải thiện hiệu quả năng lượng.",
  "The flow": "Dòng năng lượng",
  "Grid and solar,\nmanaged as one.": "Lưới điện và mặt trời,\nquản lý như một hệ thống.",
  "Two supplies, combined and managed before anything reaches compute, and a control layer that feeds back into how power is allocated.": "Hai nguồn cung, được kết hợp và quản lý trước khi đến điện toán, và một lớp điều khiển phản hồi vào cách phân bổ điện.",
  "Energy flow": "Luồng năng lượng",
  "Solar supplement": "Bổ sung năng lượng mặt trời",
  "Systems are designed to work with the power infrastructure that already exists rather than replace it, and, in the SSMDC node design, to lean on it as little as possible. On-site generation and storage reduce both energy cost and grid dependency.": "Các hệ thống được thiết kế để hoạt động với cơ sở hạ tầng điện đã tồn tại thay vì thay thế nó, và trong thiết kế nút SSMDC, dựa vào nó càng ít càng tốt. Phát điện và lưu trữ tại chỗ giảm cả chi phí năng lượng lẫn sự phụ thuộc vào lưới điện.",
  "ZEUS reports 20 kW of peak solar at the operating site. The SSMDC node design targets 80\u2013120 kWp with 300\u2013500 kWh of usable battery, enough to carry a 50\u201375 kW continuous IT load through the night in a strong solar region.": "ZEUS báo cáo 20 kW điện mặt trời đỉnh tại cơ sở đang vận hành. Thiết kế nút SSMDC hướng đến 80\u2013120 kWp với 300\u2013500 kWh pin sử dụng được, đủ để duy trì tải IT liên tục 50\u201375 kW qua đêm trong vùng có bức xạ mặt trời mạnh.",
  "Node figures are design targets": "Các số liệu nút là mục tiêu thiết kế",
  "DC end to end": "DC từ đầu đến cuối",
  "Solar generates DC. Batteries store DC. Compute consumes DC. The SSMDC keeps it that way, removing the inverter and the AC-DC stage inside every server, a stated 8\u201315% ongoing facility saving, with a practical 10\u201312% central case.": "Mặt trời tạo ra DC. Pin lưu trữ DC. Điện toán tiêu thụ DC. SSMDC duy trì điều đó, loại bỏ bộ biến tần và giai đoạn AC-DC bên trong mỗi máy chủ, tiết kiệm cơ sở liên tục 8\u201315% đã được tuyên bố, với trường hợp trung tâm thực tế 10\u201312%.",
  "Grid load balancing": "Cân bằng tải lưới điện",
  "The SSMDC concept treats compute as a flexible load: drawing excess power when the grid has it available, and idling when the grid is under peak load. A data centre that can throttle itself is a different proposition to one that cannot.": "Khái niệm SSMDC coi điện toán như một tải linh hoạt: lấy điện dư khi lưới điện có sẵn, và giảm tốc khi lưới điện ở tải đỉnh. Một trung tâm dữ liệu có thể tự điều tiết là một đề xuất khác với trung tâm không thể.",
  "Why it matters": "Tại sao điều này quan trọng",
  "Power is\nthe margin.": "Điện là\nyếu tố quyết định.",
  "In mining, energy cost is not an overhead line, it is the business. The same is increasingly true of AI compute.": "Trong khai thác, chi phí năng lượng không phải là dòng chi phí trên cao, đó chính là kinh doanh. Điều tương tự ngày càng đúng với điện toán AI.",
  "Efficient equipment": "Thiết bị hiệu quả",
  "The first lever: hardware that produces more per watt.": "Đòn bẩy đầu tiên: phần cứng tạo ra nhiều hơn trên mỗi watt.",
  "Wholesale rates": "Giá bán buôn",
  "The second: consuming at a scale that changes the tariff.": "Thứ hai: tiêu thụ ở quy mô thay đổi biểu giá.",
  "Renewable generation": "Phát điện tái tạo",
  "The third: producing some of the supply on site.": "Thứ ba: sản xuất một phần nguồn cung tại chỗ.",
  "ZEUS publishes no renewable-energy percentage, linen reduction or environmental-saving figure, and none is stated here.": "ZEUS không công bố tỷ lệ năng lượng tái tạo, mức giảm chi phí hay số liệu tiết kiệm môi trường nào, và không có gì được nêu ở đây.",
  "Power architecture": "Kiến trúc điện",

};
