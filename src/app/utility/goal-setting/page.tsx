"use client"

import React, { useState, useMemo } from 'react';
import { Target, Plus, Calendar, TrendingUp, Award, CheckCircle, Clock, Star, Edit, Trash2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// 메타데이터는 layout.tsx에서 처리

interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'technical' | 'physical' | 'mental' | 'competitive' | 'general';
  type: 'short_term' | 'medium_term' | 'long_term';
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
  milestones: Milestone[];
}

interface Milestone {
  id: string;
  title: string;
  targetValue: number;
  completed: boolean;
  completedAt?: string;
}

const goalCategories = {
  technical: { label: '기술 향상', color: 'bg-blue-500', icon: Target },
  physical: { label: '체력 향상', color: 'bg-green-500', icon: TrendingUp },
  mental: { label: '멘탈 강화', color: 'bg-purple-500', icon: Star },
  competitive: { label: '경기력 향상', color: 'bg-red-500', icon: Award },
  general: { label: '일반 목표', color: 'bg-gray-500', icon: CheckCircle }
};

const goalTemplates = [
  {
    title: '서브 정확도 80% 달성',
    description: '첫 서브 성공률을 80%까지 끌어올리기',
    category: 'technical' as const,
    type: 'short_term' as const,
    targetValue: 80,
    unit: '%'
  },
  {
    title: '주 4회 테니스 훈련',
    description: '주당 4회 이상 정기적인 테니스 훈련 실시',
    category: 'general' as const,
    type: 'medium_term' as const,
    targetValue: 16,
    unit: '회'
  },
  {
    title: '체력 테스트 점수 향상',
    description: '종합 체력 테스트에서 20점 이상 향상',
    category: 'physical' as const,
    type: 'medium_term' as const,
    targetValue: 20,
    unit: '점'
  },
  {
    title: 'NTRP 등급 상승',
    description: '현재 NTRP 등급에서 한 단계 상승',
    category: 'competitive' as const,
    type: 'long_term' as const,
    targetValue: 1,
    unit: '등급'
  },
  {
    title: '연속 경기 승리',
    description: '연속 5경기 승리 달성',
    category: 'competitive' as const,
    type: 'short_term' as const,
    targetValue: 5,
    unit: '승'
  }
];

export default function GoalSettingPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState(false);
  const [editingGoal, setEditingGoal] = useState<string | null>(null);
  const [newGoal, setNewGoal] = useState<Partial<Goal>>({
    title: '',
    description: '',
    category: 'general',
    type: 'short_term',
    targetValue: 0,
    currentValue: 0,
    unit: '',
    deadline: '',
    priority: 'medium',
    status: 'active'
  });

  const addGoal = () => {
    if (!newGoal.title || !newGoal.targetValue || !newGoal.deadline) return;

    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description || '',
      category: newGoal.category || 'general',
      type: newGoal.type || 'short_term',
      targetValue: newGoal.targetValue,
      currentValue: newGoal.currentValue || 0,
      unit: newGoal.unit || '',
      deadline: newGoal.deadline,
      priority: newGoal.priority || 'medium',
      status: 'active',
      createdAt: new Date().toISOString(),
      milestones: []
    };

    setGoals(prev => [...prev, goal]);
    setNewGoal({
      title: '',
      description: '',
      category: 'general',
      type: 'short_term',
      targetValue: 0,
      currentValue: 0,
      unit: '',
      deadline: '',
      priority: 'medium',
      status: 'active'
    });
    setIsAddingGoal(false);
  };

  const updateGoalProgress = (goalId: string, newValue: number) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === goalId) {
        const updatedGoal = { ...goal, currentValue: newValue };
        if (newValue >= goal.targetValue) {
          updatedGoal.status = 'completed';
        }
        return updatedGoal;
      }
      return goal;
    }));
  };

  const deleteGoal = (goalId: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== goalId));
  };

  const toggleGoalStatus = (goalId: string) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === goalId) {
        return {
          ...goal,
          status: goal.status === 'active' ? 'paused' : 'active'
        };
      }
      return goal;
    }));
  };

  const useTemplate = (template: typeof goalTemplates[0]) => {
    setNewGoal({
      title: template.title,
      description: template.description,
      category: template.category,
      type: template.type,
      targetValue: template.targetValue,
      currentValue: 0,
      unit: template.unit,
      deadline: '',
      priority: 'medium',
      status: 'active'
    });
    setIsAddingGoal(true);
  };

  const stats = useMemo(() => {
    const total = goals.length;
    const completed = goals.filter(g => g.status === 'completed').length;
    const active = goals.filter(g => g.status === 'active').length;
    const paused = goals.filter(g => g.status === 'paused').length;

    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    const categoryStats = Object.keys(goalCategories).map(category => ({
      category,
      total: goals.filter(g => g.category === category).length,
      completed: goals.filter(g => g.category === category && g.status === 'completed').length
    }));

    return {
      total,
      completed,
      active,
      paused,
      completionRate,
      categoryStats
    };
  }, [goals]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'active': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '완료';
      case 'active': return '진행중';
      default: return '일시정지';
    }
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              목표 설정 도구
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              SMART 목표 설정 방식으로 테니스 목표를 설정하고 달성도를 추적하세요.
              체계적인 목표 관리를 통해 꾸준한 발전을 이루세요.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* 통계 대시보드 */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600">{stats.total}</div>
              <div className="text-sm text-gray-600">전체 목표</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <div className="text-sm text-gray-600">완료 목표</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.active}</div>
              <div className="text-sm text-gray-600">진행중</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.completionRate}%</div>
              <div className="text-sm text-gray-600">달성률</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="goals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="goals">목표 관리</TabsTrigger>
            <TabsTrigger value="templates">템플릿</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
          </TabsList>

          <TabsContent value="goals" className="space-y-6">
            {/* 목표 추가 버튼 */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">나의 목표들</h2>
              <Button onClick={() => setIsAddingGoal(true)} className="bg-indigo-600 hover:bg-indigo-700">
                <Plus className="w-4 h-4 mr-2" />
                새 목표 추가
              </Button>
            </div>

            {/* 목표 추가 폼 */}
            {isAddingGoal && (
              <Card className="border-2 border-indigo-200">
                <CardHeader>
                  <CardTitle>새 목표 설정</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">목표 제목</Label>
                      <Input
                        id="title"
                        placeholder="목표를 입력하세요"
                        value={newGoal.title}
                        onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">카테고리</Label>
                      <Select value={newGoal.category} onValueChange={(value: Goal['category']) => setNewGoal(prev => ({ ...prev, category: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(goalCategories).map(([key, category]) => (
                            <SelectItem key={key} value={key}>
                              <div className="flex items-center gap-2">
                                <category.icon className="w-4 h-4" />
                                {category.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="targetValue">목표 값</Label>
                      <Input
                        id="targetValue"
                        type="number"
                        placeholder="100"
                        value={newGoal.targetValue || ''}
                        onChange={(e) => setNewGoal(prev => ({ ...prev, targetValue: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="unit">단위</Label>
                      <Input
                        id="unit"
                        placeholder="회, %, 점 등"
                        value={newGoal.unit}
                        onChange={(e) => setNewGoal(prev => ({ ...prev, unit: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deadline">마감일</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={newGoal.deadline}
                        onChange={(e) => setNewGoal(prev => ({ ...prev, deadline: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">상세 설명</Label>
                    <Textarea
                      id="description"
                      placeholder="목표에 대한 자세한 설명을 입력하세요"
                      value={newGoal.description}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={addGoal} className="bg-indigo-600 hover:bg-indigo-700">
                      목표 추가
                    </Button>
                    <Button variant="outline" onClick={() => setIsAddingGoal(false)}>
                      취소
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 목표 목록 */}
            <div className="space-y-4">
              {goals.map(goal => {
                const progress = Math.min((goal.currentValue / goal.targetValue) * 100, 100);
                const categoryInfo = goalCategories[goal.category];

                return (
                  <Card key={goal.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 ${categoryInfo.color} rounded-full flex items-center justify-center`}>
                            <categoryInfo.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                            <p className="text-gray-600 text-sm">{goal.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(goal.status)}>
                            {getStatusText(goal.status)}
                          </Badge>
                          <Badge className={getPriorityColor(goal.priority)}>
                            {goal.priority === 'high' ? '높음' : goal.priority === 'medium' ? '중간' : '낮음'}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span>진척도</span>
                          <span className="font-medium">
                            {goal.currentValue} / {goal.targetValue} {goal.unit}
                            ({Math.round(progress)}%)
                          </span>
                        </div>
                        <Progress value={progress} className="h-3" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(goal.deadline).toLocaleDateString('ko-KR')}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {goal.type === 'short_term' ? '단기' : goal.type === 'medium_term' ? '중기' : '장기'}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateGoalProgress(goal.id, Math.min(goal.currentValue + 1, goal.targetValue))}
                              disabled={goal.status === 'completed'}
                            >
                              +1
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleGoalStatus(goal.id)}
                            >
                              {goal.status === 'active' ? '일시정지' : '재개'}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => deleteGoal(goal.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {goals.length === 0 && (
              <div className="text-center py-12">
                <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">설정된 목표가 없습니다.</p>
                <p className="text-sm text-gray-500 mt-2">새 목표를 추가해보세요!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">목표 템플릿</h2>
              <p className="text-gray-600 mb-6">미리 준비된 목표 템플릿을 활용하여 빠르게 목표를 설정하세요.</p>

              <div className="grid md:grid-cols-2 gap-4">
                {goalTemplates.map((template, index) => {
                  const categoryInfo = goalCategories[template.category];
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => useTemplate(template)}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 ${categoryInfo.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <categoryInfo.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{template.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{template.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {template.targetValue} {template.unit}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {template.type === 'short_term' ? '단기' : template.type === 'medium_term' ? '중기' : '장기'}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">목표 분석</h2>

              {/* 카테고리별 분석 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    카테고리별 목표 현황
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stats.categoryStats.map(stat => {
                      const categoryInfo = goalCategories[stat.category as keyof typeof goalCategories];
                      const completionRate = stat.total > 0 ? Math.round((stat.completed / stat.total) * 100) : 0;

                      return (
                        <div key={stat.category} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${categoryInfo.color} rounded-full flex items-center justify-center`}>
                              <categoryInfo.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">{categoryInfo.label}</div>
                              <div className="text-sm text-gray-600">
                                {stat.completed}/{stat.total} 완료
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-gray-900">{completionRate}%</div>
                            <Progress value={completionRate} className="w-20 h-2 mt-1" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* SMART 목표 가이드 */}
              <Card>
                <CardHeader>
                  <CardTitle>SMART 목표 설정 가이드</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">S - Specific (구체적)</h4>
                      <p className="text-gray-600 text-sm">목표가 명확하고 구체적이어야 합니다.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">M - Measurable (측정 가능)</h4>
                      <p className="text-gray-600 text-sm">목표 달성 여부를 측정할 수 있어야 합니다.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">A - Achievable (달성 가능)</h4>
                      <p className="text-gray-600 text-sm">현실적이고 달성 가능한 목표여야 합니다.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">R - Relevant (관련성)</h4>
                      <p className="text-gray-600 text-sm">테니스 실력 향상에 도움이 되는 목표여야 합니다.</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">T - Time-bound (시간 제한)</h4>
                      <p className="text-gray-600 text-sm">목표를 달성할 기간이 명확히 설정되어야 합니다.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
