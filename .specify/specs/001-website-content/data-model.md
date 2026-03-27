# Data Model: Website Content Documentation

**Purpose**: Define entities and relationships for website content documentation
**Created**: 2025-03-27
**Feature**: Website Content Documentation

## Core Entities

### WebsitePage
Represents a distinct page in the MNS Bank website with unique URL and content.

**Attributes**:
- `pageId`: Unique identifier (string)
- `route`: URL path (string)
- `title`: Page title (string)
- `description`: Meta description (string)
- `component`: Main React component (string)
- `layout`: Layout component used (string)
- `status`: Publication status (enum: published/draft/archived)
- `lastModified`: Last modification timestamp (datetime)
- `accessibilityLevel`: WCAG compliance level (enum: AAA/AA/A)

**Relationships**:
- Has many `ContentSection`
- Has many `PageComponent`
- Belongs to `NavigationCategory`

### ContentSection
Represents a logical section of content within a page.

**Attributes**:
- `sectionId`: Unique identifier (string)
- `pageId`: Reference to WebsitePage (string)
- `title`: Section title (string)
- `content`: Text content (string)
- `translationKey`: Internationalization key (string)
- `order`: Display order (integer)
- `type`: Content type (enum: header/body/footer/sidebar)

**Relationships**:
- Belongs to `WebsitePage`
- Has many `MediaAsset`

### PageComponent
Represents a React component used on a specific page.

**Attributes**:
- `componentId`: Unique identifier (string)
- `pageId`: Reference to WebsitePage (string)
- `componentName`: Component file name (string)
- `propsInterface`: TypeScript interface (string)
- `usageCount`: Number of times used (integer)
- `responsiveBehavior`: Responsive design behavior (string)
- `accessibilityFeatures`: ARIA and accessibility features (string)

**Relationships**:
- Belongs to `WebsitePage`
- Belongs to `ComponentCategory`

### MediaAsset
Represents images, icons, and other media files used in the website.

**Attributes**:
- `assetId`: Unique identifier (string)
- `fileName`: File name (string)
- `filePath`: File path (string)
- `fileType`: File type (enum: image/svg/video/font)
- `altText`: Alternative text (string)
- `usageCount`: Number of times used (integer)
- `responsiveVariants`: Different size variants (string)
- `optimizationStatus`: Optimization status (enum: optimized/unoptimized/needs-optimization)

**Relationships**:
- Belongs to `ContentSection`
- Belongs to `ComponentCategory`

### NavigationItem
Represents navigation menu items and links.

**Attributes**:
- `navId`: Unique identifier (string)
- `title`: Display title (string)
- `href`: Target URL (string)
- `order`: Display order (integer)
- `parentNavId`: Parent navigation item (string, nullable)
- `isActive`: Current active status (boolean)
- `translationKey**: Internationalization key (string)
- `accessibilityLabel`: ARIA label (string)

**Relationships**:
- Belongs to `NavigationCategory`
- Has many `NavigationItem` (self-referencing)

### ComponentCategory
Represents categories for organizing components.

**Attributes**:
- `categoryId`: Unique identifier (string)
- `name`: Category name (string)
- `description`: Category description (string)
- `componentCount`: Number of components in category (integer)
- `reuseScore`: Reuse potential score (integer)

**Relationships**:
- Has many `PageComponent`
- Has many `MediaAsset`

### TranslationKey
Represents internationalization keys and translations.

**Attributes**:
- `keyId`: Unique identifier (string)
- `keyName`: Translation key name (string)
- `englishText`: English text (string)
- `hindiText`: Hindi text (string)
- `context`: Usage context (string)
- `usageCount`: Number of times used (integer)
- `lastUpdated`: Last update timestamp (datetime)

**Relationships**:
- Used in `ContentSection`
- Used in `NavigationItem`

## Entity Relationships

```
WebsitePage (1) -----> (N) ContentSection
WebsitePage (1) -----> (N) PageComponent
WebsitePage (1) -----> (1) NavigationCategory

ContentSection (1) -----> (N) MediaAsset
ContentSection (N) -----> (N) TranslationKey

PageComponent (N) -----> (1) ComponentCategory
MediaAsset (N) -----> (1) ComponentCategory

NavigationCategory (1) -----> (N) NavigationItem
NavigationItem (N) -----> (N) NavigationItem (hierarchical)
NavigationItem (N) -----> (N) TranslationKey
```

## Validation Rules

### WebsitePage Validation
- `route` must be unique and start with "/"
- `component` must reference existing React component file
- `accessibilityLevel` must be one of defined enum values

### ContentSection Validation
- `translationKey` must follow consistent naming convention
- `order` must be non-negative integer
- `pageId` must reference existing WebsitePage

### PageComponent Validation
- `componentName` must match actual component file
- `usageCount` must be non-negative integer
- `responsiveBehavior` must include all constitutional breakpoints

### MediaAsset Validation
- `filePath` must reference existing file
- `altText` must be provided for images
- `fileType` must match actual file extension

### NavigationItem Validation
- `href` must be valid URL or route
- `order` must be non-negative integer
- `parentNavId` must reference existing NavigationItem or be null

## State Transitions

### WebsitePage Lifecycle
```
draft → published → archived
   ↑         ↓
   └─────────┘
```

### MediaAsset Optimization
```
unoptimized → needs-optimization → optimized
      ↑              ↓              ↓
      └───────────────────────┘
```

## Data Access Patterns

### Read Operations
- Page structure queries by route
- Component usage statistics
- Content search and filtering
- Media asset inventory

### Write Operations
- Documentation updates (append-only)
- Usage count increments
- Status changes
- Translation updates

## Indexing Strategy

### Primary Indices
- WebsitePage: route, component
- ContentSection: pageId, translationKey
- PageComponent: componentName, pageId
- MediaAsset: filePath, fileType
- NavigationItem: href, order

### Secondary Indices
- TranslationKey: usageCount, lastUpdated
- ComponentCategory: componentCount, reuseScore
- ContentSection: type, order

## Performance Considerations

### Query Optimization
- Lazy loading for large content sections
- Caching for frequently accessed navigation
- Pagination for component inventories
- Search indexing for content discovery

### Storage Optimization
- Compression for large text content
- Deduplication for repeated translations
- Metadata-only queries for inventory operations
- Incremental updates for change tracking
